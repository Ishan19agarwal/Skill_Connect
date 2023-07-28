import { firestore } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import Form from "./form";
import { collection } from "@firebase/firestore";
const xlsx = require("xlsx");

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert("Uploaded Successfully");
      const reader = new FileReader();
      var fileContent;
      reader.onload = (event) => {
        fileContent = event.target.result;
        const workbook = xlsx.read(fileContent, {
          type: "binary",
        });
        console.log("success");
        const sheetName = workbook.SheetNames[0]; // Assuming the first sheet is the one to be converted
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: "A" });
        console.log(jsonData);
        // Handle the file content here
        console.log(jsonData);
        try {
          const collection1 = "Programs";
          const userData = jsonData.slice(1);
          const fieldKeys = {
            A: "adhaar",
            B: "name",
            C: "contact",
            D: "age",
            E: "enrolled",
            F: "job",
            G: "program",
          };

          userData.forEach(async (document) => {
            const user = {};
            for (var column in fieldKeys) {
              const fieldKey = fieldKeys[column];
              user[fieldKey] = String(document[column]);
            }

            const aadhar = user["adhaar"];
            // const userRef = firestore.collection(collection1)
            //   .doc('skilldevelopment')
            //   .collection('users')
            //   .doc(aadhar);
            // await userRef.set(user);

            // await userRef.set(user);
            console.log(user);
            await setDoc(
              doc(firestore, collection1, "skilldevelopment", "users", aadhar),
              user
            );
            console.log("success");
          });
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsBinaryString(selectedFile);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Form />
      <h1 className='text-3xl font-bold mb-6'>Upload File</h1>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <input type='file' onChange={handleFileChange} className='mb-4' />
        <button
          onClick={handleUpload}
          className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded'
        >
          Upload XLSX
        </button>
      </div>
    </div>
  );
}
