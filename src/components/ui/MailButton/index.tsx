import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
  }
`;

const FormContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;

  & input,
  & textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & button {
    width: 100%;
    padding: 10px;
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.buttonBackground};
    }
  }
`;

const MailButton = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const form: any = useRef();

  const toggleForm = () => setFormVisible(!isFormVisible);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm('service_6h3harm', 'template_9y9ur49', form.current, {
        publicKey: 'AHgEM4Dx8AhnlqGem',
      })
      .then(
        () => {
          alert('Đã gửi mail thành công!');
          toggleForm();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <FloatingButton onClick={toggleForm}>
        {isFormVisible ? '✕' : 'Mail'}
      </FloatingButton>
      {isFormVisible && (
        <FormContainer>
          <h4>Hãy gửi gắm câu hỏi của bạn cho giáo viên nhé:</h4>
          <br />
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Nhập email của bạn..."
              required
            />
            <textarea
              name="message"
              placeholder="Nội dung câu hỏi của bạn..."
              rows={10}
              required
            />
            <button type="submit">Gửi đến mail giáo viên</button>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default MailButton;
