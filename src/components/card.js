import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const TheCard = (props) => {
    return (  
        <Card
        style={{ width: 300, margin: 20 }}
        cover={
          <img
            alt="example"
            src={props.img}
          />
        }
        actions={[
         <div>Book Now</div>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={props.name}
          description={props.price}
        />
        <div>THIS IS OTHER DIV</div>
      </Card>

    );
}
 
export default TheCard;



