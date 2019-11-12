import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Toastr from '../components/common/Toastr/Toastr';
import EmailModal from '../components/common/EmailModal/EmailModal';
import emailHttpService from '../services/httpServices/emailHttpService';
import { openToastr as openToastrAction } from '../redux/actions/toastr';
import emailLocalStorageService from '../services/emailLocalStorageService';

const toastrSuccessText = 'Oppps something went wrong. Please try again.';
const toastrErrorText = 'Email has been saved!';

const EmailModalContainer = ({ openToastr }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onMount = () => {
      const emailLastShowDate = emailLocalStorageService.getLastShowDate();
      const openModal = !emailLastShowDate || moment().diff(moment(+emailLastShowDate), 'days') >= 7;

      return openModal ? setModalOpen(true) : null;
    };

    onMount();
  }, []);

  const toggleModal = () => setModalOpen(!isModalOpen);
  const handleModalSubmit = async (email) => {
    try {
      await emailHttpService.postEmail({ email });
      openToastr({ type: Toastr.GREEN, header: 'Success', text: toastrErrorText });
      emailLocalStorageService.setLastShowDate(moment().valueOf());
    } catch (error) {
      openToastr({ type: Toastr.RED, header: 'Error', text: toastrSuccessText });
    } finally {
      toggleModal();
    }
  };

  return (
    isModalOpen
      ? <EmailModal onSubmit={handleModalSubmit} onClose={toggleModal} />
      : null
  );
};

EmailModalContainer.propTypes = {
  openToastr: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  openToastr: openToastrAction,
};

export default connect(null, mapDispatchToProps)(EmailModalContainer);
