import { PageHeader } from 'antd';


const PageHead = () => {
    return ( 
        <PageHeader
        style={headStyle}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
  

     );
}
 
export default PageHead;


const headStyle = {
  border: '1px solid rgb(235, 237, 240)',
}