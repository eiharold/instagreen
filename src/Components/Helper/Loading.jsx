import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? 'block' : 'none',
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg
          width="61"
          height="56"
          viewBox="0 0 61 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={displayStep(0)}>
            <path
              d="M28.7195 55.9999C27.9642 55.9999 27.3519 55.3731 27.3519 54.5999C27.3519 24.9059 16.7147 17.4551 12.7104 14.6522C12.2274 14.3366 11.7701 13.9817 11.3428 13.5911C10.818 13.035 10.8331 12.1487 11.3764 11.6114C11.9064 11.0874 12.7466 11.0874 13.2766 11.6114C13.5855 11.8788 13.9127 12.1231 14.2558 12.3422C17.8115 14.8314 26.1867 20.6975 29.0832 39.939C31.3217 29.8793 37.9572 21.4334 47.0754 17.0378C47.7736 16.7016 48.607 16.9709 48.99 17.6567C49.3359 18.2808 49.1223 19.0737 48.5127 19.4279C48.4898 19.4412 48.4665 19.4538 48.4429 19.4656L48.2214 19.572C33.2271 26.7876 30.0788 42.6021 30.0788 54.6C30.0789 55.3698 29.4716 55.9952 28.7195 55.9999Z"
              fill="#465A51"
            />
          </g>
          <g style={displayStep(1)}>
            <path
              d="M58.8669 5.53845C51.5776 5.53845 41.2796 6.16281 36.017 11.5472C31.3672 16.3073 32.0974 26.3117 36.017 30.3269C38.6211 32.5809 41.9556 33.7547 45.3632 33.6169C48.6671 33.7579 51.8951 32.5781 54.3647 30.3269C59.6272 24.9397 60.2344 14.3977 60.2344 6.93561C60.233 6.1636 59.6212 5.53845 58.8669 5.53845Z"
              fill="#718F82"
            />
            <path
              d="M28.7195 55.9999C27.9642 55.9999 27.3519 55.3731 27.3519 54.5999C27.3519 24.9059 16.7147 17.4551 12.7104 14.6522C12.2274 14.3366 11.7701 13.9817 11.3428 13.5911C10.818 13.035 10.8331 12.1487 11.3764 11.6114C11.9064 11.0874 12.7466 11.0874 13.2766 11.6114C13.5855 11.8788 13.9127 12.1231 14.2558 12.3422C17.8115 14.8314 26.1867 20.6975 29.0832 39.939C31.3217 29.8793 37.9572 21.4334 47.0754 17.0378C47.7736 16.7016 48.607 16.9709 48.99 17.6567C49.3359 18.2808 49.1223 19.0737 48.5127 19.4279C48.4898 19.4412 48.4665 19.4538 48.4429 19.4656L48.2214 19.572C33.2271 26.7876 30.0788 42.6021 30.0788 54.6C30.0789 55.3698 29.4716 55.9952 28.7195 55.9999Z"
              fill="#465A51"
            />
          </g>
          <g style={displayStep(2)}>
            <path
              d="M24.2147 6.00876C18.9522 0.624356 8.6542 0 1.36764 0C0.612342 0 0 0.62685 0 1.40004C0 8.862 0.609906 19.404 5.86968 24.7913C8.33918 27.0427 11.5672 28.2226 14.8712 28.0813C18.2779 28.2187 21.6113 27.045 24.2147 24.7913C28.1343 20.776 28.8535 10.7576 24.2147 6.00876Z"
              fill="#718F82"
            />
            <path
              d="M58.8669 5.53845C51.5776 5.53845 41.2796 6.16281 36.017 11.5472C31.3672 16.3073 32.0974 26.3117 36.017 30.3269C38.6211 32.5809 41.9556 33.7547 45.3632 33.6169C48.6671 33.7579 51.8951 32.5781 54.3647 30.3269C59.6272 24.9397 60.2344 14.3977 60.2344 6.93561C60.233 6.1636 59.6212 5.53845 58.8669 5.53845Z"
              fill="#718F82"
            />
            <path
              d="M28.7195 55.9999C27.9642 55.9999 27.3519 55.3731 27.3519 54.5999C27.3519 24.9059 16.7147 17.4551 12.7104 14.6522C12.2274 14.3366 11.7701 13.9817 11.3428 13.5911C10.818 13.035 10.8331 12.1487 11.3764 11.6114C11.9064 11.0874 12.7466 11.0874 13.2766 11.6114C13.5855 11.8788 13.9127 12.1231 14.2558 12.3422C17.8115 14.8314 26.1867 20.6975 29.0832 39.939C31.3217 29.8793 37.9572 21.4334 47.0754 17.0378C47.7736 16.7016 48.607 16.9709 48.99 17.6567C49.3359 18.2808 49.1223 19.0737 48.5127 19.4279C48.4898 19.4412 48.4665 19.4538 48.4429 19.4656L48.2214 19.572C33.2271 26.7876 30.0788 42.6021 30.0788 54.6C30.0789 55.3698 29.4716 55.9952 28.7195 55.9999Z"
              fill="#465A51"
            />
          </g>
          <g style={displayStep(3)}>
            <path
              d="M24.2147 6.00876C18.9522 0.624356 8.6542 0 1.36764 0C0.612342 0 0 0.62685 0 1.40004C0 8.862 0.609906 19.404 5.86968 24.7913C8.33918 27.0427 11.5672 28.2226 14.8712 28.0813C18.2779 28.2187 21.6113 27.045 24.2147 24.7913C28.1343 20.776 28.8535 10.7576 24.2147 6.00876Z"
              fill="#718F82"
            />
            <path
              d="M28.7195 55.9999C27.9642 55.9999 27.3519 55.3731 27.3519 54.5999C27.3519 24.9059 16.7147 17.4551 12.7104 14.6522C12.2274 14.3366 11.7701 13.9817 11.3428 13.5911C10.818 13.035 10.8331 12.1487 11.3764 11.6114C11.9064 11.0874 12.7466 11.0874 13.2766 11.6114C13.5855 11.8788 13.9127 12.1231 14.2558 12.3422C17.8115 14.8314 26.1867 20.6975 29.0832 39.939C31.3217 29.8793 37.9572 21.4334 47.0754 17.0378C47.7736 16.7016 48.607 16.9709 48.99 17.6567C49.3359 18.2808 49.1223 19.0737 48.5127 19.4279C48.4898 19.4412 48.4665 19.4538 48.4429 19.4656L48.2214 19.572C33.2271 26.7876 30.0788 42.6021 30.0788 54.6C30.0789 55.3698 29.4716 55.9952 28.7195 55.9999Z"
              fill="#465A51"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
