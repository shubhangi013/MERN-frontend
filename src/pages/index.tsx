import DropZoneComponent from "@components/DropZoneComponent";
import RenderFile from "@components/RenderFile";
import { useState } from "react";
import axios from 'axios';
import DownloadFile from "@components/DownloadFile";
import EmailForm from "@components/EmailForm";
export default function Home() {

  const [file, setFile] = useState(null)

  const [id, setId] = useState(null)

  const [downloadPageLink, setDownloadPageLink] = useState(null)

  const [uploadState, setUploadState] = useState<"Uploaded"| "Uploading"| "Upload Failed" | "Upload">("Upload")

  const handleUpload = async () => {
    if(uploadState==="Uploading") return;
    setUploadState("Uploading");
    const formData = new FormData()
    formData.append("myFile",file)
    try {
      const {data}=await axios({
        method: "post",
        data : formData,
        url: "api/files/upload",
        headers:{
          "Content-Type": "multipart/form-data"
        }
      });
      setDownloadPageLink(data.downloadPageLink)
      setId(data.id);
      setUploadState("Upload Failed")
    } catch (error) {
      console.log(error.response.data);

      
    }
  }
  
  const resetComponent=()=>{
    setFile(null)
    setDownloadPageLink(null)
  }
  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className="animate-charcter font-sans text-center">DROP A FILE!</h1>
      <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl jutify-center">
       { 
       !downloadPageLink&&
        <DropZoneComponent setFile={setFile}/>
       }
        {/* render file */}
        {
          file&& (
            <RenderFile file={{
          format: file.type.split("/")[1],
          name: file.name,
          sizeInBytes: file.size,
        }}/>

          )
        }
        {/* upload button */}

        {
          !downloadPageLink&& file&&(
        <button className="p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none" onClick={handleUpload}>
          {uploadState}
        </button>
          )
        }


        {
          downloadPageLink&& (
            <div className="p-2 text-center">
          <DownloadFile downloadPageLink={downloadPageLink}/>
          <EmailForm id={id}/>
          <button className="p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none" onClick={resetComponent}>Upload New File</button>
          </div>
          )
        }
      </div>
    </div>
  );
}
