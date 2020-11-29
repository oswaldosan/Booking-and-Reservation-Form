import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import Form from './form'
import { Modal } from 'antd';

const { Meta } = Card;


const TheCard = (props) => {

   const [visible, setVisible] = useState(false)
   
   function bookClick () {
       setVisible(true)
   }
   function handleCancel () {
       setVisible(false)
   }

    return (  
      <>
        <Card
        style={{ width: 300, margin: 20 }}
        cover={
          <img
            alt="example"
            src={props.img}
          />
        }
        actions={[
         <div onClick={bookClick}>Book Now</div>,
        ]}
      >
        <Meta/>
        <h1>{props.packageName}</h1>
        <h3>{props.price}</h3>
      </Card>
       <Modal
          title="Basic Modal"
          visible={visible}
          /*onOk={this.handleOk}*/
          onCancel={handleCancel}
        >
           <Form packageName={props.packageName}></Form>
        </Modal>
    </>
    );
}
 
export default TheCard;



