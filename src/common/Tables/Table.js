import React, { Component } from 'react';
import styled from 'styled-components';
import { white, transparentBlack, transparentBlackLight } from '../../themes/colors';
import { bodyBold } from '../../themes/fonts';
import { Edit } from 'styled-icons/feather/Edit';
import { Delete } from 'styled-icons/feather/Delete';

class Table extends Component {
  renderRows() {
    const { data } = this.props;
    console.log(data);
    return (
      <TBody>
      
        {data.map(item => {
          return (
            <TR key={item.id}>
              <TD>{item.title}</TD>
              <TD>{item.description}</TD>
              <TD>{item.tags}</TD>
              <TD>{item.name}</TD>
              <TD>{item.timeUpdated}</TD>
              <TD><EditIconCell /></TD>
              <TD><DeleteIconCell /></TD>
            </TR>
          )
        })}
    
      </TBody>  
    )
  }
  render() {
    return (
      <StyledTable>
        <Thead>
          <TR>
            <TH>Title</TH>
            <TH>Description</TH>
            <TH>Tags</TH>
            <TH>User</TH>
            <TH>Time of post</TH>
            <TH>Edit</TH>
            <TH>Delete</TH>
          </TR>
        </Thead>
        {this.renderRows()}
      </StyledTable>
    );
  }
}

const EditIconCell = styled(Edit)`
  height: 2em;
  width: 2em;
`;

const DeleteIconCell = styled(Delete)`
  height: 2em;
  width: 2em;
`;

const StyledTable = styled.table`
  width: 100%;
  color: ${white};
  font-family: ${bodyBold};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
`;

const Thead = styled.thead`
  background-color: ${transparentBlack};
`;

const TBody = styled.tbody`
  width: 100%;
  color: ${white};
  font-family: ${bodyBold};
  background-color: ${transparentBlackLight};
`;

const TR = styled.tr`
  margin-top: 1em;
  width: 100%;
  color: ${white};
  font-family: ${bodyBold};
`;

const TH = styled.th`
  text-align: center;
`;

const TD = styled.td`
  text-align: center;
`;

export { Table };