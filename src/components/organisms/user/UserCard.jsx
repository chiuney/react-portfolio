import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} ></UserIconWithName>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>電話</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>ウェブ</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
}

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding: 0 0 8px 32px;
    overflow-wrap: break-word ;
  }
`