import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BasicButton } from 'components/buttons/BasicButton';
import { UpdatesSignupRequest } from 'types/API.type';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please type a valid email'),
});

export const EndCTA: FC = () => {
  const [loading, setLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  return (
    <div className="text-center">
      <h2 className="title-header mb-5">
        Applications COMING SOON (~January 2023)
      </h2>
      <p className="text-2xl tablet:text-xl">
        Be the first to hear about Outliers 2023
      </p>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async ({ email }, { resetForm, setErrors }) => {
          setEmailSuccess(false);
          setLoading(true);
          setErrors({}); // Clear errors
          const updatesSignupRequest: UpdatesSignupRequest = {
            recipientEmailAddress: email,
          };

          try {
            // Send confirmation email to recipient
            await axios.post('/api/signupForUpdates', updatesSignupRequest);
            setEmailSuccess(true);
            resetForm();
          } catch (error) {
            setErrors({
              email: 'Something went wrong, please try again',
            });
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mx-auto mt-20 mb-20 flex w-fit flex-row border-2">
              <div className="relative">
                <Field
                  disabled={loading}
                  name="email"
                  tydive="email"
                  placeholder="crypto@outliers.build"
                  className="w-[30rem] border-r-2 py-3 pl-5 pr-10 text-2xl outline-none disabled:opacity-30 tablet:w-[22.5rem] tablet:py-5 tablet:text-xl"
                />
                {errors.email && touched.email ? (
                  <p className="absolute mt-2 text-lg text-error-color">
                    {errors.email}
                  </p>
                ) : null}
                {!errors.email && emailSuccess ? (
                  <p className="absolute mt-2 text-lg ">✨ Success! ✨</p>
                ) : null}
              </div>
              <BasicButton disabled={loading} type="submit" color="blue">
                Sign Up
              </BasicButton>
            </div>
          </Form>
        )}
      </Formik>
      <p className="text-2xl">
        Follow{' '}
        <a
          href="https://mobile.twitter.com/outlierdao"
          target="_blank"
          rel="noreferrer"
          className="text-floodgate underline"
        >
          @outlierdao
        </a>{' '}
        for updates.
      </p>
    </div>
  );
};
