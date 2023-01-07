
import {useFormik} from "formik";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import { registerSchemaProjects } from "../schema/SchemaProjects"; 
import { useState } from "react";
import NewProject from "../../organisms/NewProjectData";


 const NewProjectFormik = () => {
  const [teamPayload, setTeamPayload] = useState([]);
  const { id } = useParams();

const formik = useFormik({
    initialValues: {
      name: "",
      date_start: "",
      date_end: "",
      date_end_performed: "",
      project_status_id: 0,
      project_type_id: 0,
      team_cost: "",
      id: "",
      date_start_performed: "",
    },
    validationSchema: registerSchemaProjects,
    onSubmit: async (values) => {
      await api({
        method: id ? "put" : "post",
        url: id ? `/project/${id}` : "/project",
        data: id
          ? {
              ...values,
              team_cost: values.team_cost
                .replace("R$", "")
                .replace(".", "")
                .replace(",", "."),
            }
          : {
              ...values,
              users: teamPayload,
              team_cost: values.team_cost
                .replace("R$", "")
                .replace(".", "")
                .replace(",", "."),
            },
      });
    },
  });


  return (
    <div>
      <form id="register" onSubmit={formik.handleSubmit}>
        <NewProject DataProjects={formik}/>
      </form>
    </div>
  );
};

export default NewProjectFormik;

