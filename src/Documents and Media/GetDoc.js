import React, { useState, useEffect } from "react";
import { getDocument, deleteDocument,postDocument } from "../API/Document-and-Media";
import ClayTable from "@clayui/table";
import ClayButton from "@clayui/button";
import ClayModal, {useModal} from '@clayui/modal';

export default function GetDoc() {
  const [file, setFile] = useState([]);
  const [document, setDocument] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const { observer, onOpenChange, open } = useModal();


  useEffect(() => {
    getDocument().then((res) => {
      setFile(res.items);
    });
    setisLoading(false);
  }, []);
  //console.log(file)

  const handleDelete = (id) => {
    deleteDocument(id).then(() => {
      setFile((prevFile) => prevFile.filter((document) => document.id !== id));
    });
  };


  const handleAddDocument = async () => {
    if (!setDocument) {
      console.error("No file selected.");
      return;
    }
  
    try {
      await postDocument(document);
      const updatedDocuments = await getDocument();
      setFile(updatedDocuments.items);
      onOpenChange(false);
      setDocument(null);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };


  return (
    <>
    {open && (
        <ClayModal
          observer={observer}
          size="lg"
         // spritemap={spritemap} 
          status="info"
        >
          <ClayModal.Header>Add Documents</ClayModal.Header>
          <ClayModal.Body>
          <input type="file"  onChange={(e) => setDocument(e.target.files[0])}/>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton
                  displayType="secondary"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </ClayButton>
                <ClayButton onClick={handleAddDocument}>
                  Upload Document
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
           <ClayButton onClick={() => onOpenChange(true)} style={{float:"right", marginBottom:"1rem"}}>
                Add New Document
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  height="24px"
                  width="24px"
                  style={{marginLeft:".5rem"}}
                >
                  <title>add-circle-solid</title>
                  <rect width="48" height="48" fill="none"></rect>

                  <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34,26H26v8a2,2,0,0,1-4,0V26H14a2,2,0,0,1,0-4h8V14a2,2,0,0,1,4,0v8h8a2,2,0,0,1,0,4Z"></path>
                </svg>
            </ClayButton>
          <ClayTable>
           
            <ClayTable.Head>
              <ClayTable.Row>
                <ClayTable.Cell expanded headingCell>
                  {"ID"}
                </ClayTable.Cell>
                <ClayTable.Cell headingCell>{"Name"}</ClayTable.Cell>
                <ClayTable.Cell headingCell>{"date Created"}</ClayTable.Cell>
                <ClayTable.Cell headingCell>{"date Created"}</ClayTable.Cell>
              </ClayTable.Row>
            </ClayTable.Head>
            <ClayTable.Body>
              {file.map((document, index) => (
                <ClayTable.Row key={index}>
                  <ClayTable.Cell headingTitle>{document.id}</ClayTable.Cell>
                  <ClayTable.Cell>{document.fileName}</ClayTable.Cell>
                  <ClayTable.Cell>{document.dateCreated}</ClayTable.Cell>
                  <ClayTable.Cell>
                    {
                      <ClayButton displayType="secondary">
                        <svg
                          fill="#000000"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M486.489,25.506c-34.007-34.007-89.046-34.01-123.055,0C355.961,32.98,38.747,350.194,36.475,352.465 c-0.006,0.006-0.011,0.012-0.017,0.018c-2.017,2.02-3.557,4.605-4.333,7.555c-3.353,12.74-27.56,104.719-31.257,118.767 c-2.386,9.065,0.25,18.816,6.88,25.445c6.994,6.993,16.767,9.162,25.443,6.878c13.866-3.649,106.391-28,118.766-31.257 c2.849-0.75,5.447-2.235,7.556-4.333c0.006-0.006,0.012-0.011,0.018-0.017c1.875-1.875,319.131-319.131,326.959-326.959 C520.496,114.556,520.498,59.517,486.489,25.506z M69.706,466.91l-24.619-24.619l11.99-45.559l58.187,58.189L69.706,466.91z M147.697,440.022l-75.724-75.724L339.468,96.803l75.724,75.724L147.697,440.022z M462.824,124.896l-23.966,23.965l-75.724-75.724 l23.966-23.966c20.925-20.926,54.796-20.929,75.724,0C483.751,70.098,483.752,103.968,462.824,124.896z"></path>
                        </svg>
                      </ClayButton>
                    }
                  </ClayTable.Cell>
                  <ClayTable.Cell>
                    {
                      <ClayButton
                        displayType="secondary"
                        onClick={() => handleDelete(document.id)}
                      >
                        <svg
                          fill="#000000"
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path>
                        </svg>
                      </ClayButton>
                    }
                  </ClayTable.Cell>
                </ClayTable.Row>
              ))}
            </ClayTable.Body>
          </ClayTable>
        </div>
      )}
    </div>
    </>
  );
}
