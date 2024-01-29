// import styles from './BaseTemplate.module.css';

export interface ITextInput {
  sampleTextProp: string;
}

const TextInput: React.FC<ITextInput> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};
export default TextInput;
