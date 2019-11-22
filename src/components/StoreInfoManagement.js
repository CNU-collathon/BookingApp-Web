import React, {useState , useEffect} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button , Form ,Upload, Icon } from 'antd';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
export default function StoreInfoManagement() {

    const backendURL = "http://bookingapp.ga:3000/"
    // const WorkPlaceID = 
    
    const [workPlaceInfo, setWorkPlaceInfo] = useState('')
    const [address,setAddress] = useState('')
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [isEdit,setIsEdit] = useState('true')
    const [image,setImage] = useState('')
    const onChangeAddress = e => setAddress(e.target.value);
    const onChangeWorkPlaceInfo = e => setWorkPlaceInfo(e.target.value);
    const onChangeName = e => setName(e.target.value);
    const onChangeCategory = e => setCategory(e.target.value);
    const goBack = () => {
      // {/* signIn process ... */}
    };
    const saveInfo = () => {
      // {/* saveInfo process ... */}
      console.log({
        SelfEmployedID:localStorage.getItem('localSelfId'),
        Address:address,
        WorkPlaceInfo: workPlaceInfo,
        Name:name,
        Category:category
      })
      axios.post(backendURL+"workplace",{
        SelfEmployedID:localStorage.getItem('localSelfId'),
        Address:address,
        WorkPlaceInfo: workPlaceInfo,
        Name:name,
        Category:category,
        Image:image
      }).then( res => {
        console.log('response', res)
        alert("완료")
      }).catch(err =>{
        console.log('failed', err)
      })  
    };

    const editInfo = () => {
      // {/* saveInfo process ... */}
      console.log({
        SelfEmployedID:localStorage.getItem('localSelfId'),
        Address:address,
        WorkPlaceInfo: workPlaceInfo,
        Name:name,
        Category:category
      })
      axios.put(backendURL+"workplace/update/"+localStorage.getItem("WorkPlaceID"),{
        SelfEmployedID:localStorage.getItem('localSelfId'),
        Address:address,
        WorkPlaceInfo: workPlaceInfo,
        Name:name,
        Category:category,
        Image:image
      }).then( res => {
        console.log('response', res)
        alert("완료")
        setIsEdit("true")
      }).catch(err =>{
        console.log('failed', err)
      })  
    };

    const getFiles = (file) => {
        const uploadImage = {
          File:file["base64"].split(",")[1],
          FileName:file["name"],
          Size:file['size'].split(" ")[0]
        }
        setImage(uploadImage)
        console.log(uploadImage)
    }

    useEffect(() => {
      axios.get(backendURL + "account/workplace/" + localStorage.getItem("localSelfId")).
      then( response => {
       console.log(response)
       if(response.data.result===0){
         setIsEdit("false")
         console.log("등록모드")  
       }
       else{
       console.log(response)
       setAddress(response.data[0]["Address"]);
       setWorkPlaceInfo(response.data[0]["WorkPlaceInfo"]);
       setName(response.data[0]["Name"]);
       setCategory(response.data[0]["Category"]);
       setImage(response.data[0]["Image"])
       localStorage.setItem("WorkPlaceID",response.data[0]["WorkPlaceID"])
       console.log("수정모드" +localStorage.getItem("WorkPlaceID") )
       }
      }
      )
  }, [])

    return (
        <div className="ReservationItem">
            <h1>StoreInfoManagement</h1>
            <Form>
              <Form.Item>
                <div>SelfEmployedID : {localStorage.getItem('localSelfId')}</div>
              </Form.Item>  
              <Form.Item>
              Address <br/>
              <input className="StoreInfoInput"type="text" value={address} onChange={onChangeAddress}></input>
              </Form.Item>
              <Form.Item>
                WorkPlaceInfo <br/>
                <input className="StoreInfoInput" type="text" value={workPlaceInfo} onChange={onChangeWorkPlaceInfo}></input>
              </Form.Item>
              <Form.Item>
                Name <br/>
                <input className="StoreInfoInput" type="text" value={name} onChange={onChangeName}></input>
              </Form.Item>
              <Form.Item>
                Category <br/>
                <input className="StoreInfoInput" type="text" value={category} onChange={onChangeCategory}></input>
              </Form.Item>
              Store Image <br/>
              <FileBase64
                  multiple={ false } onDone={ getFiles.bind(this) } ></FileBase64>
                  {/* 자리 */}
              <Form.Item>
                <div id="StoreInfoButton">
                  <Button id="StoreInfoSaveButton" onClick={ isEdit == "true" ? editInfo : saveInfo }>Save</Button>
                  <Link to='/SignIn'>
                  <Button id="StoreInfoBackButton" onClick={goBack}>뒤로가기</Button></Link>
                </div>
              </Form.Item>
            </Form>
        </div>
    )
}

//                  <img height="300px" width="300px" src={`data:image/jpeg;base64,${image.File}`} />


