import React, { useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import { Link } from 'react-router-dom';
import { steps } from '../../utils/formUtils';
import Auth0Logout from '../Logout/Auth0Logout';
import { useAuth0 } from '@auth0/auth0-react';
import './MultiStepProgressBar.css';

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  const { user, isAuthenticated } = useAuth0();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStepIndex = steps.findIndex((step) => step.page === page);
  const stepPercentage = currentStepIndex * 33.25;

  const isStepAccomplished = (index) => {
    return currentIndex > index;
  };

  return (
    <main className="main-progress-bar">
      {isAuthenticated && (
        <div className="dashboardSec">
          <h1>
            Hello,{' '}
            {user?.nickname &&
              user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1)}
          </h1>
          <Auth0Logout />
        </div>
      )}

      <nav className="nav-progress-bar">
        <div className="progress-bar-container">
          <ProgressBar percent={stepPercentage}>
            {steps.map((step, index) => (
              <Step key={index}>
                {({ accomplished }) => (
                  <Link
                    to={step.page.startsWith('/') ? step.page : `/${step.page}`}
                  >
                    <div
                      className={`indexedStep ${
                        isStepAccomplished(index) ? 'accomplished' : null
                      } ${currentIndex === index ? 'current' : null}`}
                      onClick={() => {
                        setCurrentIndex(index);
                        onPageNumberClick(step.page);
                      }}
                    >
                      <div className="imageContainer">
                        {/* <img
                          src={`images/${step.image}`}
                          alt={`Step ${index + 1}`}
                        /> */}
                        <img
                          src={`images/${
                            step.imageComplete ? step.imageComplete : step.image
                          }`}
                          alt={`Step ${index + 1}`}
                        />
                      </div>
                    </div>
                  </Link>
                )}
              </Step>
            ))}
          </ProgressBar>
        </div>
        <div className="progress-bar-calculated">
          <div>Projected ERC</div>
          <div className="erc-info">
            <img src="/images/flag.png" alt="Flag" />
            <div>189,000</div>
          </div>
        </div>
      </nav>

      {steps[currentIndex]?.step === 'File Invite' || steps[currentIndex]?.step === 'Complete' ? (
        <></>
      ) : (
        <div className="next-step-header">
          <h2>
            Next step:{' '}
            <span className="dynamic-step">{steps[currentIndex]?.step} </span>{' '}
          </h2>
        </div>
      )}
    </main>
  );
};

export default MultiStepProgressBar;
