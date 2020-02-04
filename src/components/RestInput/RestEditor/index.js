import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { getRecordData, imageUploadHandler } from 'utils/tools';
import FormItem from '../../form/FormItem';
import { RestInputContext } from '../RestInputContext';
import RestEditorWrapper from './styles';

const getValueFromEvent = (previousRange, source, editor) => editor.getHTML();

const RestEditor = props => (
  <RestEditorWrapper>
    <RestInputContext.Consumer>
      {({ record, form, handleSubmit }) => (
        <FormItem
          {...props}
          form={form}
          formOptions={{ trigger: 'onEditorChange' }}
          defaultValue={
            props.defaultValue || getRecordData(record, props.source)
          }
        >
          <Editor
            {...props}
            // bounds=".app"
            // modules={modules}
            toolbar="undo redo | forecolor backcolor | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link media image"
            init={{
              images_upload_handler: imageUploadHandler,
            }}
            plugins="code link checklist autolink image imagetools media"
            record={record}
            handleSubmit={handleSubmit}
          />
        </FormItem>
      )}
    </RestInputContext.Consumer>
  </RestEditorWrapper>
);

RestEditor.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.any,
  valuePropName: PropTypes.any,
  formOptions: PropTypes.object,
};

RestEditor.defaultProps = {
  valuePropName: 'defaultValue',
  formOptions: { getValueFromEvent, trigger: 'onBlur' },
};

export default RestEditor;
