const one = [
    { date : "01.01(금)", element : "신 정" }, 
    { date : "01.04(월)", element : "시 무 식" }, 
    { date : "01.04(월)", element : "[대학원] 법학전문대학원 합격자 등록: 1.4.~1.5." }, 
    { date : "01.05(화)", element : "복학원 접수시작" }, 
    { date : "01.06(수)", element : "[대학원] 완성논문 접수: 1.6.~1.7." }, 
    { date : "01.08(금)", element : "2021학년도 대학 정시 모집 원서접수 (1.8.~1.11.)" }, 
    { date : "01.18(월)", element : "[대학원] 대학원 전기1차 힙격자 등록: 1.18.~1.20." }, 
    { date : "01.19(화)", element : "1학기 수강꾸러미 신청 (1.19.~1.21.)" }, 
    { date : "01.27(수)", element : "[대학원] 특수대학원 힙격자 등록: 1.27.~1.29." }, 
];

const two = [
    { date : "02.01(월)", element : "[대학원] 외국어시험 원서 접수: 2.1.~2.3." }, 
    { date : "02.03(수)", element : "[대학원] 대학원 전기2차 합격자 등록: 2.3.~2.5." }, 
    { date : "02.04(목)", element : "[대학원] 외국어시험 시행계획 보고: 2.4.~2.5." }, 
    { date : "02.08(월)", element : "2021학년도 신입생 등록 (2.8.~2.10.)" }, 
    { date : "02.08(월)", element : "1학기 수강신청 (2.8.~2.10.)" }, 
    { date : "02.08(월)", element : "[대학원] 외국어시험 시행: 2.8.~2.16." }, 
    { date : "02.09(화)", element : "[대학원] 대학원위원회 회의: 2.9." }, 
    { date : "02.11(목)", element : "설날 연휴 (2.11.~2.13.)" }, 
    { date : "02.15(월)", element : "휴학원 접수시작" }, 
    { date : "02.17(수)", element : "[대학원] 외국어시험 결과 보고: 2.17.~2.18." }, 
    { date : "02.19(금)", element : "2020학년도 전기학위수여식 (2.19.)" }, 
    { date : "02.22(월)", element : "2021학년도 1학기 재학생 등록 (2.22.~2.25.)" }, 
    { date : "02.24(수)", element : "[대학원] 수료생등록 신청: 2.24.~2.26." }, 
    { date : "02.24(수)", element : "[대학원] 종합시험 원서접수: 2.24.~2.26." }, 
    { date : "02.26(금)", element : "입학식" },     
];

const three = [
    { date : "03.01(월)", element : "삼일절(3.1.)" }, 
    { date : "03.01(월)", element : "1학기 개시일(3.1.)" }, 
    { date : "03.02(화)", element : "개강(3.2.)" }, 
    { date : "03.02(화)", element : "[대학원] 종합시험 시행계획 보고 : 3.2.~3.3." }, 
    { date : "03.03(수)", element : "1학기 수강변경 (3.3.~3.5./3.8.)" }, 
    { date : "03.04(목)", element : "[대학원] 종합시험 시행 : 3.4.~3.10." }, 
    { date : "03.04(목)", element : "[대학원] 논문지도교수 위촉 보고 : 3.4.~3.10." }, 
    { date : "03.10(수)", element : "[대학원] 수료생 등록금 납부 : 3.10.~3.11." }, 
    { date : "03.11(목)", element : "[대학원] 종합시험 결과 보고 : 3.11.~3.12." }, 
    { date : "03.17(수)", element : "1학기 수강정정 (3.17.~3.18.)" }, 
    { date : "03.17(수)", element : "[대학원] 학위논문 제출예정자 신청 : 3.17.~3.19." }, 
    { date : "03.22(월)", element : "복학원 접수종료(3.22.)" }, 
    { date : "03.26(금)", element : "수업일수 1/4 (3.26.)" }, 
];

const four = [
    { date : "04.01(목)", element : "[대학원] 논문심사위원 추천 : 4.1.~4.5." }, 
    { date : "04.06(화)", element : "[대학원] 심사용 논문 접수 : 4.6.~4.8." }, 
    { date : "04.08(목)", element : "[대학원] 논문제출을 위한 외국어면제원 접수 종료: 4.8." }, 
    { date : "04.09(금)", element : "[대학원] 논문 접수 결과 보고 : 4.9.~4.12." }, 
    { date : "04.14(수)", element : "[대학원] 논문심사료 납부 : 4.14.~4.15." }, 
    { date : "04.19(월)", element : "중간고사 기간 (4.19.~4.23.)" }, 
    { date : "04.20(화)", element : "[대학원] 대학원위원회 회의 : 4.20." }, 
    { date : "04.22(목)", element : "수업일수 2/4(4.22.)" }, 
    { date : "04.22(목)", element : "일반휴학원 접수종료(4.22.)" }, 
    { date : "04.26(월)", element : "[대학원] 학위논문 심사 시작 : 4.26." }, 
];

const five = [
    { date : "05.01(토)", element : "근로자의날 (5.1.)" }, 
    { date : "05.05(수)", element : "어린이날 (5.5.)" }, 
    { date : "05.19(수)", element : "석가탄신일 (5.19.)" }, 
    { date : "05.21(금)", element : "수업일수 3/4(5.21.)" }, 
    { date : "05.21(금)", element : "육아 및 질병휴학원 접수종료(5.21.)" }, 
    { date : "05.28(금)", element : "개교75주년 기념일(5.28.)" }, 
    { date : "05.31(월)", element : "[대학원] 학위논문 심사 종료 : 5.31.~6.4." }, 
];

const six = [
    { date : "06.06(일)", element : "현충일 (6.6.)" }, 
    { date : "06.07(월)", element : "[대학원] 논문 심사 결과 보고 : 6.7.~6.8." }, 
    { date : "06.08(화)", element : "보강 기간 (6.8.~6.10.)" }, 
    { date : "06.11(금)", element : "기말고사 기간 (6.11.~6.17.)" }, 
    { date : "06.17(목)", element : "[대학원] 원문파일 접수 : 6.17.~6.24." }, 
    { date : "06.18(금)", element : "하계방학 (6.18.)" }, 
    { date : "06.21(월)", element : "여름계절수업 개강(6.21.)" }, 
];

const seven = [
    { date : "07.01(목)", element : "복학원 접수시작(7.1.)" }, 
    { date : "07.01(목)", element : "[대학원] 완성논문 접수 : 7.7.~7.8." }, 
    { date : "07.17(토)", element : "제헌절 (7.17.)" }, 
    { date : "07.20(화)", element : "2학기 수강꾸러미 신청 (7.20.~7.22.)" }, 
    { date : "07.27(화)", element : "[대학원] 대학원위원회 회의 : 7.27." }, 
    { date : "07.28(수)", element : "[대학원] 외국어시험 원서 접수 : 7.28.~7.30." },     
];

const eight = [
    { date : "08.02(월)", element : "[대학원] 외국어시험 시행계획 보고 : 8.2.~8.3." }, 
    { date : "08.04(수)", element : "[대학원] 외국어시험 시행 : 8.4.~8.10." }, 
    { date : "08.10(화)", element : "2학기 수강신청 (8.10.~8.12.)" }, 
    { date : "08.11(수)", element : "[대학원] 외국어시험 결과 보고 : 8.11.~8.12." }, 
    { date : "08.15(일)", element : "광복절 (8.15.)" }, 
    { date : "08.16(월)", element : "휴학원 접수시작(8.16.)" }, 
    { date : "08.16(월)", element : "광복절 대체공휴일" }, 
    { date : "08.20(금)", element : "2020학년도 후기 학위수여식(8.20.)" }, 
    { date : "08.23(월)", element : "2021학년도 2학기 재학생등록 (8.23.~8.26.)" }, 
    { date : "08.23(월)", element : "[대학원] 수료생 등록 신청 : 8.23.~8.25." }, 
    { date : "08.25(수)", element : "[대학원] 종합시험 원서 접수 : 8.25.~8.27." }, 
    { date : "08.30(월)", element : "[대학원] 종합시험 시행계획 보고 : 8.30.~8.31." }, 
];

const nine = [
    { date : "09.01(수)", element : "2학기 개시일(9.1.)" }, 
    { date : "09.01(수)", element : "개강(9.1.)" }, 
    { date : "09.01(수)", element : "[대학원] 종합시험 시행 : 9.1.~9.7." }, 
    { date : "09.01(수)", element : "[대학원] 논문지도교수 위촉 보고 : 9.1.~9.7." }, 
    { date : "09.02(목)", element : "2학기 수강변경 (9.2.~9.3./9.6.~9.7.)" }, 
    { date : "09.02(목)", element : "[대학원] 수료생 등록금 납부 : 9.8.~9.9." }, 
    { date : "09.08(수)", element : "[대학원] 종합시험 결과 보고 : 9.8.~9.9." }, 
    { date : "09.10(금)", element : "2022학년도 대학수시 원서접수 (9.10.~9.14.)" }, 
    { date : "09.15(수)", element : "2학기 수강정정 (9.15.~9.16.)" }, 
    { date : "09.15(수)", element : "[대학원] 학위논문 제출예정자 신청 : 9.15.~9.17." }, 
    { date : "09.20(월)", element : "추석연휴 (9.20~9.22.)" }, 
    { date : "09.23(목)", element : "복학원 접수종료(9.23.)" }, 
    { date : "09.27(월)", element : "[대학원] 논문심사위원 추천 : 9.27.~9.29." }, 
    { date : "09.30(목)", element : "수업일수 1/4 (9.30.)" }, 
];

const ten = [
    { date : "10.03(일)", element : "개천절 (10.3.)" }, 
    { date : "10.04(월)", element : "개천절 대체공휴일" }, 
    { date : "10.05(화)", element : "[대학원] 심사용 논문 접수 : 10.5.~10.7." }, 
    { date : "10.07(목)", element : "[대학원] 논문제출을 위한 외국어면제원 접수 종료: 10.7." }, 
    { date : "10.08(금)", element : "[대학원] 논문 접수 결과 보고 : 10.8.~10.11." }, 
    { date : "10.09(토)", element : "한글날 (10.9.)" }, 
    { date : "10.11(월)", element : "한글날 대체공휴일" }, 
    { date : "10.13(수)", element : "[대학원] 논문심사료 납부 : 10.13.~10.14." }, 
    { date : "10.14(목)", element : "[대학원] 대학원위원회 회의 : 10.19." }, 
    { date : "10.25(월)", element : "중간고사 기간(10.25.~10.29.)" }, 
    { date : "10.25(월)", element : "[대학원] 학위논문 심사 시작 : 10.25." }, 
    { date : "10.29(금)", element : "수업일수 2/4(10.29.)" }, 
    { date : "10.29(금)", element : "일반휴학원 접수종료(10.29.)" }, 
];

const eleven = [
    { date : "11.25(목)", element : "수업일수 3/4(11.25.)" }, 
    { date : "11.25(목)", element : "육아 및 질병휴학원 접수종료(11.25.)" }, 
    { date : "11.29(월)", element : "[대학원] 학위논문 심사 종료 : 11.29.~12.3." },
];

const twelve = [
    { date : "12.06(월)", element : "[대학원] 논문 심사 결과 보고 : 12.6.~12.7." }, 
    { date : "12.08(수)", element : "보강 기간 (12.8.~12.14.)" }, 
    { date : "12.15(수)", element : "기말고사 기간 (12.15.~12.21.)" }, 
    { date : "12.16(목)", element : "[대학원] 원문파일 접수 : 12.16.~12.23." }, 
    { date : "12.22(수)", element : "동계방학 및 겨울 계절수업 개강 (12.22.)" }, 
    { date : "12.25(토)", element : "성탄절 (12.25.)" }, 
    { date : "12.27(월)", element : "성탄절 대체공휴일" }, 
    { date : "12.30(목)", element : "2022학년도 대학정시모집 원서접수 (12.30.~1.3.)" }, 
    { date : "12.31(금)", element : "종무식 (12.31.)" }, 
];

const monthlyPlan = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
];

const title = document.querySelector("#title");
const monthlyList = document.querySelector("#monthly");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const nowMonthList = monthlyPlan[month];

title.innerText = String(month + 1) + "." + String(day) + ". " + "NOTI";
monthlyList.firstElementChild.innerText = String(month + 1) + "월 주요 일정";

function addPlan(item) {
    const li = document.createElement("li");
    const newPlan = item.date + "\n" + item.element;
    li.innerText = newPlan;
    monthlyList.appendChild(li);
}

if (year === 2021) {
    nowMonthList.forEach(addPlan);
}
else {
    const li = document.createElement("li");
    const newPlan = "아직 업데이트가 되지 않았습니다 :(";
    li.innerText = newPlan;
    monthlyList.appendChild(li);
}

/*
# codes for parsing

f = open("plans.txt", 'r',encoding='UTF8')

while True:
    line = f.readline()
    if not line: break
    if (line == "2021년\n"):
        line = f.readline()
        print("="*50)
        continue
    lst = line.split(")",maxsplit=1)
    target = "{ date : \"%s\", element : \"%s\" }, " %((lst[0] + ")"), lst[1][:-1])
    print(target)

f.close()

*/