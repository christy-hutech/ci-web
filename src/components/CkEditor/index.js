import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function CkEditorComp() {
  const [addData, setAddData] = useState("");
  const [showData, setShowData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setAddData(data);
  };
  return (
    <div >
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from Abhinandan</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log('onChange',{ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
export default CkEditorComp;
