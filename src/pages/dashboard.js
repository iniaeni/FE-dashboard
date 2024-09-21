import React, { useState } from 'react';
import { Input, Table, Card } from 'antd';
import { ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const columns = [
  {
    title: 'Tittle',
    dataIndex: 'tittle',
    render: (text) => (
      <span style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black' }}>
        {text}
      </span>
    ),
  },
  {
    title: 'Assignee',
    dataIndex: 'assignee',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Place',
    dataIndex: 'place',
    sorter: (a, b) => a.age - b.age,
    render: (text) => (
      <span style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '150px',
        display: 'inline-block'
      }}>
        {text}
      </span>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => {
      let color, icon;
      if (status === 'completed') {
        color = 'green';
        icon = <ClockCircleOutlined style={{ color: color, background: 'rgba(247, 203, 131, 0.27)', padding: '4px' }} />;
      } else if (status === 'pending') {
        color = 'red';
        icon = <CloseCircleOutlined style={{ color: color, background: 'rgba(247, 203, 131, 0.452)', padding: '4px' }} />;
      }
      return (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      );
    },
  },
  {
    title: 'Creation date',
    dataIndex: 'creationDate',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Last changes',
    dataIndex: 'lastChange',
    sorter: (a, b) => a.age - b.age,
  },
];

const dataIndex = [
  {
    key: '1',
    tittle: 'Skyscraper Cleaning',
    assignee: 'Emma Johnson',
    place: 'Downtown Tower, Exterior Area',
    status: 'completed',
    creationDate: '05 Oct 2023 at 5:14 pm',
    lastChange: '05 Oct 2023 at 8:14 pm',
  },
  {
    key: '2',
    tittle: 'Water Filter Maintenance at Stark Corporation',
    assignee: 'Michael Brown',
    place: 'Stark Corporation Office, Pump Room',
    status: 'pending',
    creationDate: '02 Nov 2023 at 2:14 pm',
    lastChange: '02 Nov 2023 at 2:14 pm',
  },
  {
    key: '3',
    tittle: 'Server Room Cooling System Check',
    assignee: 'Oliva Davis',
    place: 'Main Office Building, Server Room',
    status: 'pending',
    creationDate: '13 Oct 2023 at 3:14 pm',
    lastChange: '15 Oct 2023 at 2:14 pm',
  },
  {
    key: '4',
    tittle: 'Office Space Reorganization',
    assignee: 'James Miller',
    place: 'Entire Building, Security Center',
    status: 'pending',
    creationDate: '16 Oct 2023 at 3:14 pm',
    lastChange: '16 Oct 2023 at 6:14 pm',
  },
  {
    key: '5',
    tittle: 'Security System Update',
    assignee: 'Ava Wilson',
    place: 'Headquarters, All Office Floors',
    status: 'completed',
    creationDate: '03 Oct 2023 at 3:14 pm',
    lastChange: '03 Oct 2023 at 5:43 pm',
  },
  {
    key: '6',
    tittle: 'Landscape Beautification',
    assignee: 'William Moore',
    place: 'Building Surroundings, Front and Rear Garden',
    status: 'pending',
    creationDate: '07 Oct 2023 at 10:14 am',
    lastChange: '07 Oct 2023 at 3:14 pm',
  },
  {
    key: '7',
    tittle: 'Elevator Safety Inspection',
    assignee: 'Sophia Taylor',
    place: 'Tower A & B, All Elevator Shafts',
    status: 'pending',
    creationDate: '04 Oct 2023 at 8:15 am',
    lastChange: '04 Oct 2023 at 7:14 pm',
  },
  {
    key: '8',
    tittle: 'Parking Lot Resurfacing',
    assignee: 'Benjamin Martinez',
    place: 'Building Parking Lot, All Sections',
    status: 'completed',
    creationDate: '09 Oct 2023 at 7:34 am',
    lastChange: '09 Oct 2023 at 11:12 am',
  },
  {
    key: '9',
    tittle: 'HVAC System Maintenance',
    assignee: 'Isabella Anderson',
    place: 'Rooftop and Basement, HVAC Control Room',
    status: 'pending',
    creationDate: '26 Oct 2023 at 7:14 am',
    lastChange: '26 Oct 2023 at 5:14 pm',
  },
  {
    key: '10',
    tittle: 'Fire Safety Drill',
    assignee: 'Lucas Garcia',
    place: 'Entire Building, All Occupied Floors',
    status: 'pending',
    creationDate: '03 Oct 2023 at 3:14 pm',
    lastChange: '03 Oct 2023 at 3:14 pm',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

const Dashboard = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [data, setData] = useState(dataIndex);
  const [searchText, setSearchText] = useState('');

  const onSearch = (value) => {
    const filteredData = dataIndex.filter((item) =>
      item.tittle.toLowerCase().includes(value.toLowerCase()) ||
      item.assignee.toLowerCase().includes(value.toLowerCase()) ||
      item.place.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div style={{ padding: '10vh' }}>
       <Card title="Table Dashboard" style={{ width: '90%', margin: '0 auto'}}>
      <Search
        placeholder="Search by title, assignee, or place"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{ marginBottom: 16, width: '30%'}}
      />
      <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
        columns={columns}
        dataSource={dataIndex}
        
      />
      </Card>
    </div>
  );
};

export default Dashboard;
