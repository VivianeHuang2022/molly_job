import styles from './Recommendation.module.css';
import { useField } from 'formik';
import { Input } from 'antd';
const { TextArea } = Input;

export const FormGroup = ({ formGroup, title }) => {
  const fields = Object.keys(formGroup).map((key) => {
    const item = formGroup[key];
    return (
      <div key={key} id={key} className={styles.formContainer}>
        <SingleField {...item} />
      </div>
    );
  });
  return (
    <div>
      <Section title={title} />
      <div className={styles.groupGridInfo}>{fields}</div>
    </div>
  );
};

export const FormSingle = ({ instruction, form, title, sectionTitle }) => {
  return (
    <div>
      <Section title={title} />
      {instruction && <StarInstructions sectionTitle={sectionTitle} />}
      <SingleField {...form} />
    </div>
  );
};

export const SingleField = ({ label, component, ...props }) => {
  const [field, meta] = useField(props);
  const CustomField =
    component === 'textarea' ? (
      <TextArea {...field} {...props} />
    ) : (
      <Input {...field} {...props} />
    );

  return (
    <>
      <div>
        {label}
        {CustomField}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

//共用section
export const Section = ({ title }) => (
  <div>
    <h4>{title}</h4>
  </div>
);

//页面组件
export const StarInstructions = ({ sectionTitle }) => {
  return (
    <div className={styles.instructions}>
      <h4>{sectionTitle.starInstructions}</h4>
      <ul>
        <li>{sectionTitle.situation}</li>
        <li>{sectionTitle.task}</li>
        <li>{sectionTitle.action}</li>
        <li>{sectionTitle.result}</li>
      </ul>
    </div>
  );
};
