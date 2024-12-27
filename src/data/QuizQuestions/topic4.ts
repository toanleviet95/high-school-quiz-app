// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const topic4: Topic = {
  topic: 'Vận dụng',
  level: 'Trung bình',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 300, // seconds
  questions: [
    {
      question: "Khi tổ chức một sự kiện lớn, người quản lý nên làm gì để giảm thiểu tác động tiêu cực của hiệu ứng tâm lý đám đông?",
      choices: [
        "Tăng cường thông tin và giao tiếp",
        "Giảm số lượng người tham dự",
        "Tạo ra sự hoảng loạn",
        "Không làm gì cả",
      ],
      type: "MCQs",
      correctAnswers: ["Tăng cường thông tin và giao tiếp"],
      score: 10,
    },
    {
      question: "Nếu bạn thấy một đám đông đang hoảng loạn, bạn nên làm gì để giúp đỡ?",
      choices: [
        "Tham gia vào sự hoảng loạn",
        "Cố gắng giữ bình tĩnh và hướng dẫn mọi người",
        "Bỏ chạy",
        "Đứng im và quan sát",
      ],
      type: "MCQs",
      correctAnswers: ["Cố gắng giữ bình tĩnh và hướng dẫn mọi người"],
      score: 10,
    },
    {
      question: "Khi tham gia vào một cuộc thảo luận nhóm, bạn nên làm gì để đảm bảo mọi người đều có cơ hội phát biểu?",
      choices: [
        "Chỉ nghe ý kiến của người lớn tuổi",
        "Khuyến khích mọi người nói lên ý kiến của mình",
        "Chỉ lắng nghe một người",
        "Không cho ai nói",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích mọi người nói lên ý kiến của mình"],
      score: 10,
    },
    {
      question: "Khi một nhóm người quyết định hành động theo cách không hợp lý, bạn nên làm gì?",
      choices: [
        "Đồng ý với họ",
        "Đưa ra ý kiến phản biện một cách lịch sự",
        "Bỏ đi",
        "Tham gia vào hành động đó",
      ],
      type: "MCQs",
      correctAnswers: ["Đưa ra ý kiến phản biện một cách lịch sự"],
      score: 10,
    },
    {
      question: "Khi tổ chức một cuộc biểu tình, điều nào sau đây là quan trọng nhất để đảm bảo an toàn?",
      choices: [
        "Không có kế hoạch",
        "Có sự chuẩn bị và thông báo rõ ràng",
        "Tăng cường sự hoảng loạn",
        "Không thông báo cho ai",
      ],
      type: "MCQs",
      correctAnswers: ["Có sự chuẩn bị và thông báo rõ ràng"],
      score: 10,
    },
    {
      question: "Nếu bạn là một nhà lãnh đạo trong một nhóm, bạn nên làm gì để khuyến khích sự sáng tạo?",
      choices: [
        "Ngăn cản mọi người phát biểu",
        "Khuyến khích mọi người thử nghiệm và chia sẻ ý tưởng",
        "Chỉ nghe ý kiến của một người",
        "Tạo ra sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích mọi người thử nghiệm và chia sẻ ý tưởng"],
      score: 10,
    },
    {
      question: "Khi một nhóm người cùng nhau tham gia vào một hoạt động tích cực, điều này có thể dẫn đến điều gì?",
      choices: [
        "Tăng cường sự kết nối",
        "Gây ra sự chia rẽ",
        "Tạo ra sự hoảng loạn",
        "Hành vi bạo lực",
      ],
      type: "MCQs",
      correctAnswers: ["Tăng cường sự kết nối"],
      score: 10,
    },
    {
      question: "Khi thấy một người trong nhóm bạn có ý kiến khác biệt, bạn nên làm gì?",
      choices: [
        "Bỏ qua ý kiến của họ",
        "Lắng nghe và thảo luận",
        "Chỉ nghe ý kiến của người khác",
        "Gây áp lực cho họ",
      ],
      type: "MCQs",
      correctAnswers: ["Lắng nghe và thảo luận"],
      score: 10,
    },
    {
      question: "Khi một nhóm người cùng nhau làm việc vì một mục tiêu chung, điều này có thể dẫn đến điều gì?",
      choices: [
        "Sự hỗn loạn",
        "Tinh thần đồng đội mạnh mẽ",
        "Sự phân chia",
        "Hành vi bạo lực",
      ],
      type: "MCQs",
      correctAnswers: ["Tinh thần đồng đội mạnh mẽ"],
      score: 10,
    },
    {
      question: "Khi tham gia vào một cuộc thảo luận nhóm, bạn nên làm gì để tránh hiệu ứng tâm lý đám đông?",
      choices: [
        "Đưa ra ý kiến cá nhân một cách rõ ràng",
        "Chỉ nghe ý kiến của người khác",
        "Tạo ra sự hoảng loạn",
        "Không nói gì cả",
      ],
      type: "MCQs",
      correctAnswers: ["Đưa ra ý kiến cá nhân một cách rõ ràng"],
      score: 10,
    },
  ]
}
