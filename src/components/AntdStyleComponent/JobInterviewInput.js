import { Input } from 'antd';
import styled from 'styled-components';
const JobInterviewInput = styled(Input)`
.ant-input:hover {
    border-color: black;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);  

}
.ant-input:focus{
    border-color: black;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);  

}
.ant-input{
    height: auto;
    font-size: 20px;
}
`
export default JobInterviewInput