
import { ReactNode } from 'react';
import styled from 'styled-components';
import Avatar1 from '../assets/images/avatar_1.jpg'
import Avatar2 from '../assets/images/avatar_2.jpg'
import Avatar3 from '../assets/images/avatar_3.jpg'

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: ReactNode;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Lê Nguyễn Minh Tâm',
    role: 'Học sinh Lớp 12A6 trường THPT Hải Lăng, Quảng Trị',
    description: 'Chủ nhiệm cậu lạc bộ Văn hóa HLCEC trường THPT Hải Lăng.<br /> Chủ nhiệm các dự án "Đổi rác-xây vườn".',
    avatar:  <Avatar src={Avatar1} />,
  },
  {
    name: 'Lê Xuân Đức',
    role: 'Giáo viên trường THPT Hải Lăng, Quảng Trị',
    description: 'Tổ toán.<br/>Trình độ: Thạc Sỹ<br/>Hiện phó bí thư Đoàn trường.<br/>Phụ trách các câu lạc bộ: Văn Hóa HLCEC; CLB Khoa học kỹ thuật, Olympia',
    avatar: <Avatar src={Avatar2} />,
  },
  {
    name: 'Phan Thị Minh Hiếu',
    role: 'Học sinh Lớp 12A5 trường THPT Hải Lăng, Quảng Trị',
    description: 'Trưởng ban Sự kiện Câu lạc bộ Văn hóa HLCEC trường THPT Hải Lăng.<br />MC các chương trình về hướng nghiệp, Chương trình ngoại khóa.',
    avatar: <Avatar src={Avatar3} />,
  },
];
