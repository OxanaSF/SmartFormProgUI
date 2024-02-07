import { steps } from '../utils/formUtils';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DocuSignPage from '../components/DocuSignPage/DocuSignPage';
import FileInvite from '../components/FileInvite/FileInvite';
import FinchPage from '../components/FinchPage/FinchPage';
import Header from '../components/Header/Header';
import MultiStepProgressBar from '../components/MultiStepProgressBar/MultiStepProgressBar';
import PageFive from '../components/PageFive/PageFive';
import PageSix from '../components/PageSix/PageSix';
import Survey1Page from '../components/Survey1Page/Survey1Page';
import Survey2 from '../components/Survey2Page/Survey2';
import TaxStatusPage from '../components/TaxStatusPage/TaxStatusPage';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../components/Spinner';

export function AuthedRoutes() {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  const [page, setPage] = useState('/');

  const nextPageNumber = (pageNumber: string) => {
    const currentStepIndex = steps.findIndex((step: any) => step.page === page);
    const targetStepIndex = steps.findIndex(
      (step: any) => step.step === pageNumber
    );

    if (targetStepIndex > currentStepIndex) {
      setPage(pageNumber);
    }
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
    //eslint-disable-next-line
  }, [isAuthenticated, isLoading]);

  if (isLoading || !user) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div className='App'>
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
        <Routes>
          <Route path='/' element={<Survey1Page />} />
          <Route path='/complete-docusign' element={<DocuSignPage />} />
          <Route path='/complete-taxstatus' element={<TaxStatusPage />} />
          <Route path='/complete-payroll' element={<FinchPage />} />
          <Route path='/file-invite' element={<FileInvite />} />
          <Route path='/business-survey' element={<Survey2 />} />
          <Route path='/pagefive' element={<PageFive />} />
          <Route path='/pagesix' element={<PageSix />} />
        </Routes>
      </div>
    </>
  );
}
