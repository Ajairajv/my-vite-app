import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Checkbox,
  IconButton,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const SecondPage = () => {
  const initialData = [
    {
      department: 'customer_service',
      sub_departments: [
        { name: 'support', selected: false },
        { name: 'customer_success', selected: false },
      ],
      selected: false,
      open: false,
    },
    {
      department: 'design',
      sub_departments: [
        { name: 'graphic_design', selected: false },
        { name: 'product_design', selected: false },
        { name: 'web_design', selected: false },
      ],
      selected: false,
      open: false,
    },
  ];

  const [data, setData] = useState(initialData);

  const handleToggle = (departmentIndex:number, subDepartmentIndex:number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[departmentIndex].sub_departments[
        subDepartmentIndex
      ].selected = !newData[departmentIndex].sub_departments[subDepartmentIndex]
        .selected;
      return newData;
    });
  };

  const handleDepartmentToggle = (departmentIndex:number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[departmentIndex].selected = !newData[departmentIndex].selected;
      newData[departmentIndex].sub_departments.forEach((subDept) => {
        subDept.selected = newData[departmentIndex].selected;
      });
      return newData;
    });
  };

  const handleCollapseToggle = (departmentIndex:number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[departmentIndex].open = !newData[departmentIndex].open;
      return newData;
    });
  };

  return (
    <List>
      {data.map((department, departmentIndex) => (
        <React.Fragment key={department.department}>
          <ListItem>
            <Checkbox
              checked={department.selected || department.sub_departments.every((subDept) => subDept.selected)}
              onChange={() => handleDepartmentToggle(departmentIndex)}
            />
            <ListItemText primary={department.department} />
            <IconButton onClick={() => handleCollapseToggle(departmentIndex)}>
              {department.open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={department.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDept, subDepartmentIndex) => (
                <ListItem key={subDept.name}>
                  <Checkbox
                    checked={subDept.selected}
                    onChange={() => handleToggle(departmentIndex, subDepartmentIndex)}
                  />
                  <ListItemText primary={subDept.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SecondPage;
