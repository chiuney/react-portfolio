import styled from "styled-components";
import { useState } from "react";
import { init, send } from 'emailjs-com';

export const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        to_name: fullName,
        company: company,
        from_email: mail,
        message: message,
      };
      send(serviceID, templateID, template_param).then(() => {
        window.alert('お問い合わせを送信致しました。');

        setFullName('');
        setCompany('');
        setMail('');
        setMessage('');
      });
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  // 必須項目
  const disableSend = fullName === '' || mail === '' || message === '';

  return (
    <SContainer>
      <STitle>Contact</STitle>
      <SForm>
          <SInput
            type="text"
            value={fullName}
            placeholder='お名前'
            onChange={(e) => setFullName(e.target.value)}
          />
          <SInput
            type="text"
            required
            value={company}
            placeholder='会社名'
            onChange={(e) => setCompany(e.target.value)}
          />
          <SInput
            type="email"
            value={mail}
            placeholder='メールアドレス'
            onChange={(e) => setMail(e.target.value)}
          />
          <STextarea
            type="text"
            rows="10"
            value={message}
            placeholder='お問い合わせ内容を入力してください'
            onChange={(e) => setMessage(e.target.value)}
          />
          <SButton
            onClick={handleClick}
            disabled={disableSend}
            >
            お問い合わせを送信する
          </SButton>
        </SForm>
    </SContainer>
  );
}

const SContainer = styled.div`
  min-height: 100vh;
`

const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  text-align: center;
  font-size: 24px;
  letter-spacing: .08em;
`

const SForm = styled.form`
  min-width: 300px;
  max-width: 550px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const SInput = styled.input`
  height: 36px;
  padding: 0 12px;
  margin: 24px 0 0 0;
  outline: none;
`

const STextarea = styled.textarea`
  padding: 12px 12px 0;
  margin: 24px 0 0 0;
`

const SButton = styled.button`
  height: 40px;
  margin: 24px 0 0 0;
  background: #bea76f;
  border: none;
  outline: none;
  :disabled {
    background: gray;
  }
`