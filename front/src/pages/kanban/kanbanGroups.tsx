import { Container, Row, Col } from 'react-grid-system';
import Header from '../../components/Header';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { GroupsToUser } from '../../types/groupToUser';
import '../../styles/kanbanGroups.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { URIgroup, URIgroupToUser } from '../../enumerations/uri';
import { Groups } from '../../types/group';

function KanbanGroups() {
  const [dataGroup, setGroup] = useState<Groups[]>([]);
  const [data, setData] = useState<GroupsToUser[]>([]);

  //axios get
  useEffect(() => {
    async function fetchGroup() {
      axios
        .get(`${URIgroup.PEGAR_GROUP_USER}${localStorage.getItem("userEmail")?.replace(/["]/g, "")}`)
        .then((response) => {
          setGroup(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchGroup();

  }, []);

  console.log(data);
  console.log(dataGroup);

  return (
    <>
      <Header />
      <div className='d-flex flex-center flex-column flex-column-fluid hf-spacing px-2 mt-5'>

        <div className='container containerback bg-light-opacity rounded mx-auto' style={{ padding: "2rem" } }>

          <div className="text-center">
            <h1 className="text-dark mb-0 font-padrao-titulo">
              Equipes
            </h1>
          </div>
          
          <div className='containerStyle'>
            <div className='rodape' >
              {dataGroup.map((grupo: any) => (
                <div className='colStyle'>
                  <a href='/kanban'>{grupo.groupName} </a>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>


    </>
  );

}

export default KanbanGroups;