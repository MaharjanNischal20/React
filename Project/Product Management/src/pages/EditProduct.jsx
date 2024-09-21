import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditProduct() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Form type="Edit" id={id} />;
    </>
  );
}
