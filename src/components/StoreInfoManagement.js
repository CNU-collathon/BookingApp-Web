import React, {useState , useEffect} from 'react'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button , Form ,Upload, Icon ,Input} from 'antd';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
export default function StoreInfoManagement() {

    const backendURL = "http://bookingapp.ga:3000/"
    // const backendURL = "http://localhost:3100/"
    // const WorkPlaceID = 
    
    const [workPlaceInfo, setWorkPlaceInfo] = useState('')
    const [address,setAddress] = useState('')
    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [isEdit,setIsEdit] = useState('true')
    const [image,setImage] = useState('')
    const [renderImage,setRenderImage] = useState('')
    const onChangeAddress = e => setAddress(e.target.value);
    const onChangeWorkPlaceInfo = e => setWorkPlaceInfo(e.target.value);
    const onChangeName = e => setName(e.target.value);
    const onChangeCategory = e => setCategory(e.target.value);
    const goBack = () => {
      // {/* signIn process ... */}
    };
    const saveInfo = () => {
      // {/* saveInfo process ... */}
      let form = new FormData() 
      form.append('SelfEmployedID', localStorage.getItem('localSelfId')) 
      form.append('Address',address)
      form.append("WorkPlaceInfo",workPlaceInfo)
      form.append("Name",name)
      form.append("Category",category)
      form.append("files",image)
      // console.log(form)
      for ( var p of form){
        console.log(p)
      }


      // console.log({
      //   SelfEmployedID:localStorage.getItem('localSelfId'),
      //   Address:address,
      //   WorkPlaceInfo: workPlaceInfo,
      //   Name:name,
      //   Category:category,
      //   Image:image
      // })
    //   axios.post(backendURL+"workplace",{
    //     SelfEmployedID:localStorage.getItem('localSelfId'),
    //     Address:address,
    //     WorkPlaceInfo: workPlaceInfo,
    //     Name:name,
    //     Category:category,
    //     files:{
    //       image
    //     }
    //   }).then( res => {
    //     console.log('response', res)
    //     alert("완료")
    //   }).catch(err =>{
    //     console.log('failed', err)
    //   })  
    // };
    axios.post(backendURL+"workplace",form).then( res => {
      console.log('response', res)
      alert("완료")
    }).catch(err =>{
      console.log('failed', err)
    })  
  };

    const editInfo = () => {
      // {/* saveInfo process ... */}

      let form = new FormData() 
      form.append('SelfEmployedID', localStorage.getItem('localSelfId')) 
      form.append('Address',address)
      form.append("WorkPlaceInfo",workPlaceInfo)
      form.append("Name",name)
      form.append("Category",category)
      form.append("files",image)
      // console.log(form)
      for ( var p of form){
        console.log(p)
      }

      // console.log({
      //   SelfEmployedID:localStorage.getItem('localSelfId'),
      //   Address:address,
      //   WorkPlaceInfo: workPlaceInfo,
      //   Name:name,
      //   Category:category,
      //   Image:image
      // })
      // axios.put(backendURL+"workplace/update/"+localStorage.getItem("WorkPlaceID"),{
      //   SelfEmployedID:localStorage.getItem('localSelfId'),
      //   Address:address,
      //   WorkPlaceInfo: workPlaceInfo,
      //   Name:name,
      //   Category:category,
      //   files:{
      //     image
      //   }
      // }).then( res => {
      //   console.log('response', res)
      //   alert("완료")
      //   setIsEdit("true")
      // }).catch(err =>{
      //   console.log('failed', err)
      // })  
      axios.put(backendURL+"workplace/update/"+localStorage.getItem("WorkPlaceID"),form).then( res => {
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
        setRenderImage(uploadImage)
        setImage(file.file)
        console.log(file)
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
       setRenderImage(response.data[0]["Image"])
       localStorage.setItem("WorkPlaceID",response.data[0]["WorkPlaceID"])
       console.log("수정모드" +localStorage.getItem("WorkPlaceID") )
       }
      }
      )
  }, [])

    return (
        <div>
            <h1>StoreInfoManagement</h1>
            <Form>
              <Form.Item>
                SelfEmployedID : {localStorage.getItem('localSelfId')}
              </Form.Item>  
              <Form.Item>
              Address <input type="text" value={address} onChange={onChangeAddress}></input>
              </Form.Item>
              <Form.Item>
                WorkPlaceInfo <input type="text" value={workPlaceInfo} onChange={onChangeWorkPlaceInfo}></input>
              </Form.Item>
              <Form.Item>
                Name <input type="text" value={name} onChange={onChangeName}></input>
              </Form.Item>
              <Form.Item>
                Category <input type="text" value={category} onChange={onChangeCategory}></input>
              </Form.Item>
              Store Image <br/>
              <Form.Item>
              {/* Upload <input type='file' value={file} onChange={onChangeFile}></input> */}
              </Form.Item>
              <FileBase64
                  multiple={ false } onDone={ getFiles.bind(this) } ></FileBase64>
              <img height="300px" width="300px" src={`data:image/jpeg;base64,${renderImage.File}`} />
              <Form.Item>
                 <Button onClick={ isEdit=="true" ? editInfo : saveInfo }>
                   Save</Button><Link to='/SignIn'><Button onClick={goBack}>뒤로가기</Button></Link>
              </Form.Item>
            </Form>
        </div>
    )
}
