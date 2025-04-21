// College data
const colleges = [
    {
        id: 1,
        name: "College of Engineering Trivandrum (CET)",
        location: "Thiruvananthapuram",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"],
        rating: 4.8,
        fees: 50000,
        placement: 95,
        coordinates: { lat: 8.5453, lng: 76.9078 },
        researchFocus: true,
        website: "https://www.cet.ac.in",
        yearEstablished: 1939,
        naacAccreditation: "A++",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Premier Government Institution", "Strong Industry Connections", "Excellent Placement Record"]
    },
    {
        id: 2,
        name: "Govt Model Engineering College",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Information Technology"],
        rating: 4.7,
        fees: 50000,
        placement: 92,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: true,
        website: "https://www.mec.ac.in",
        yearEstablished: 1989,
        naacAccreditation: "A++",
        facilities: ["Advanced Labs", "Innovation Hub", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Research Focus", "Industry Partnerships"]
    },
    {
        id: 3,
        name: "Sree Chitra Thirunal College of Engineering",
        location: "Thiruvananthapuram",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.6,
        fees: 50000,
        placement: 90,
        coordinates: { lat: 8.5241, lng: 76.9366 },
        researchFocus: true,
        website: "https://www.sctce.ac.in",
        yearEstablished: 1995,
        naacAccreditation: "A+",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 4,
        name: "Mar Athanasius College of Engineering",
        location: "Kothamangalam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"],
        rating: 4.5,
        fees: 75000,
        placement: 88,
        coordinates: { lat: 10.0647, lng: 76.6278 },
        researchFocus: true,
        website: "https://www.mace.ac.in",
        yearEstablished: 1961,
        naacAccreditation: "A+",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Autonomous Institution", "Strong Industry Connect", "Excellent Infrastructure"]
    },
    {
        id: 5,
        name: "NSS College of Engineering",
        location: "Palakkad",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.4,
        fees: 50000,
        placement: 85,
        coordinates: { lat: 10.7867, lng: 76.6548 },
        researchFocus: true,
        website: "https://www.nssce.ac.in",
        yearEstablished: 1960,
        naacAccreditation: "A+",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 6,
        name: "Mar Baselios College of Engineering and Technology",
        location: "Thodupuzha",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.5,
        fees: 75000,
        placement: 87,
        coordinates: { lat: 9.8947, lng: 76.7284 },
        researchFocus: true,
        website: "https://www.mbcet.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A+",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Autonomous Institution", "Strong Industry Connect", "Excellent Infrastructure"]
    },
    {
        id: 7,
        name: "Christ College of Engineering",
        location: "Irinjalakuda",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.3,
        fees: 80000,
        placement: 86,
        coordinates: { lat: 10.4789, lng: 76.2144 },
        researchFocus: true,
        website: "https://www.christcollegeofengineering.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Strong Academic Focus", "Good Placement Record", "Modern Infrastructure"]
    },
    {
        id: 8,
        name: "Government Engineering College Idukki",
        location: "Idukki",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 50000,
        placement: 82,
        coordinates: { lat: 9.8497, lng: 76.9519 },
        researchFocus: true,
        website: "https://www.gecidukki.ac.in",
        yearEstablished: 1999,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 9,
        name: "College of Engineering Vadakara",
        location: "Vadakara",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.3,
        fees: 50000,
        placement: 84,
        coordinates: { lat: 11.6086, lng: 75.5927 },
        researchFocus: true,
        website: "https://www.cev.ac.in",
        yearEstablished: 2000,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 10,
        name: "College of Engineering Munnar",
        location: "Munnar",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 50000,
        placement: 81,
        coordinates: { lat: 10.0889, lng: 77.0595 },
        researchFocus: true,
        website: "https://www.cemunnar.ac.in",
        yearEstablished: 2001,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 11,
        name: "ACE College of Engineering",
        location: "Thrissur",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 80,
        coordinates: { lat: 10.5276, lng: 76.2144 },
        researchFocus: false,
        website: "https://www.acecollege.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 12,
        name: "Vidya Academy of Science and Technology",
        location: "Thrissur",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 75000,
        placement: 82,
        coordinates: { lat: 10.5276, lng: 76.2144 },
        researchFocus: true,
        website: "https://www.vidyaacademy.ac.in",
        yearEstablished: 2001,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Strong Academic Focus", "Good Placement Record", "Modern Infrastructure"]
    },
    {
        id: 13,
        name: "Sree Narayana Gurukulam College of Engineering",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 70000,
        placement: 79,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: false,
        website: "https://www.sngce.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 14,
        name: "Trinity College of Engineering",
        location: "Thrissur",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 78,
        coordinates: { lat: 10.5276, lng: 76.2144 },
        researchFocus: false,
        website: "https://www.trinity.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 15,
        name: "Toc H Institute of Science & Technology",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 80,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: false,
        website: "https://www.tist.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 16,
        name: "TOMS College of Engineering",
        location: "Kottayam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 77,
        coordinates: { lat: 9.5916, lng: 76.5222 },
        researchFocus: false,
        website: "https://www.toms.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 17,
        name: "Ilahia College of Engineering and Technology",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 76,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: false,
        website: "https://www.ilahia.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 18,
        name: "Jyothi Engineering College",
        location: "Thrissur",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 79,
        coordinates: { lat: 10.5276, lng: 76.2144 },
        researchFocus: false,
        website: "https://www.jyothi.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 19,
        name: "Musaliar College of Engineering & Technology",
        location: "Pathanamthitta",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 75,
        coordinates: { lat: 9.2648, lng: 76.7870 },
        researchFocus: false,
        website: "https://www.musaliar.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 20,
        name: "School of Engineering, CUSAT",
        location: "Kochi",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.4,
        fees: 50000,
        placement: 85,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: true,
        website: "https://www.cusat.ac.in",
        yearEstablished: 1979,
        naacAccreditation: "A+",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 21,
        name: "MES College of Engineering & Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 70000,
        placement: 81,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: true,
        website: "https://www.mes.ac.in",
        yearEstablished: 1994,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Strong Academic Focus", "Good Placement Record", "Modern Infrastructure"]
    },
    {
        id: 22,
        name: "University College of Engineering, Thodupuzha",
        location: "Idukki",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.3,
        fees: 50000,
        placement: 83,
        coordinates: { lat: 9.8947, lng: 76.7284 },
        researchFocus: true,
        website: "https://www.ucet.ac.in",
        yearEstablished: 1996,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Government Institution", "Strong Academic Focus", "Good Placement Record"]
    },
    {
        id: 23,
        name: "Christ Knowledge City",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 80000,
        placement: 82,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: true,
        website: "https://www.christknowledgecity.ac.in",
        yearEstablished: 2000,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Strong Academic Focus", "Good Placement Record", "Modern Infrastructure"]
    },
    {
        id: 24,
        name: "SNGCET",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 70000,
        placement: 80,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.sngcet.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 25,
        name: "Sadguru Swami Nithyananda Institute of Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 78,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.snit.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 26,
        name: "Jai Bharath College of Management and Engineering Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 77,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.jbc.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 27,
        name: "John Cox Memorial CSI Institute of Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 76,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.jcm.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 28,
        name: "AL-AZHAR College of Engineering & Polytechnic",
        location: "Thodupuzha",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 75,
        coordinates: { lat: 9.8947, lng: 76.7284 },
        researchFocus: false,
        website: "https://www.alazhar.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 29,
        name: "Viswajyothi College of Engineering and Technology",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.2,
        fees: 75000,
        placement: 81,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: true,
        website: "https://www.viswajyothi.ac.in",
        yearEstablished: 2001,
        naacAccreditation: "A",
        facilities: ["Research Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Strong Academic Focus", "Good Placement Record", "Modern Infrastructure"]
    },
    {
        id: 30,
        name: "Royal College of Engineering & Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 70000,
        placement: 79,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.royal.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 31,
        name: "UKF College of Engineering and Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 78,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.ukf.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 32,
        name: "Cochin Institute Of Science And Technology",
        location: "Kochi",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 80,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: false,
        website: "https://www.cist.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 33,
        name: "Sree Buddha College of Engineering",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 77,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.sreebuddha.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 34,
        name: "St. Thomas College of Engineering & Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 76,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.stthomas.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 35,
        name: "Heera College of Engineering & Technology",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 75,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.heera.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 36,
        name: "MGM College of Engineering and Technology",
        location: "Ernakulam",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 79,
        coordinates: { lat: 9.9312, lng: 76.2673 },
        researchFocus: false,
        website: "https://www.mgm.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 37,
        name: "Nirmala College of Engineering",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 78,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.nirmala.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 38,
        name: "KVM College of Engineering & Information Technology",
        location: "Cherthala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 70000,
        placement: 79,
        coordinates: { lat: 9.6849, lng: 76.3382 },
        researchFocus: false,
        website: "https://www.kvm.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 39,
        name: "ICCS College of Engineering and Management",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.0,
        fees: 70000,
        placement: 77,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.iccs.ac.in",
        yearEstablished: 2003,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    },
    {
        id: 40,
        name: "Universal Engineering College",
        location: "Kerala",
        courses: ["Computer Science", "Electronics", "Mechanical", "Civil"],
        rating: 4.1,
        fees: 75000,
        placement: 80,
        coordinates: { lat: 10.8505, lng: 76.2711 },
        researchFocus: false,
        website: "https://www.universal.ac.in",
        yearEstablished: 2002,
        naacAccreditation: "A",
        facilities: ["Labs", "Sports Complex", "Library", "Hostel"],
        keyHighlights: ["Good Academic Focus", "Decent Placement Record", "Modern Infrastructure"]
    }
];

// Scholarships data
const scholarships = [
    {
        id: 1,
        name: "National Scholarships",
        type: "Government",
        description: "Various national scholarships offered by the Ministry of Education for engineering students",
        eligibility: "Merit-cum-means based",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://scholarships.gov.in/"
    },
    {
        id: 2,
        name: "PM-USP Yojana",
        type: "Government",
        description: "Financial assistance for students from economically weaker sections",
        eligibility: "Students from NAAC-accredited institutions",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://pmusp.in/"
    },
    {
        id: 3,
        name: "AICTE – SWANATH Scholarship",
        type: "Government",
        description: "Scholarship for meritorious students from SC/ST communities",
        eligibility: "SC/ST students with good academic record",
        amount: "₹50,000 per annum",
        applicationPeriod: "Annual",
        website: "https://www.aicte-india.org/"
    },
    {
        id: 4,
        name: "ONGC Scholarship",
        type: "Government",
        description: "Scholarship for SC/ST students pursuing engineering",
        eligibility: "SC/ST students with good academic record",
        amount: "₹48,000 per annum",
        applicationPeriod: "Annual",
        website: "https://www.ongcindia.com/"
    },
    {
        id: 5,
        name: "Ratan Tata Scholarship",
        type: "Private",
        description: "Scholarship for meritorious engineering students",
        eligibility: "Merit-based selection",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.tatatrusts.org/"
    },
    {
        id: 6,
        name: "Infosys Foundation Scholarship",
        type: "Private",
        description: "Scholarship for financially disadvantaged students with strong academic records",
        eligibility: "Financial need and academic merit",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.infosys.com/"
    },
    {
        id: 7,
        name: "Mahindra Educational Scholarship",
        type: "Private",
        description: "Scholarship for engineering students in various disciplines",
        eligibility: "Merit-based selection",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.mahindra.com/"
    },
    {
        id: 8,
        name: "LIC Golden Jubilee Scholarship",
        type: "Private",
        description: "Scholarship for meritorious students from economically backward sections",
        eligibility: "Economic backwardness and academic merit",
        amount: "₹20,000 per annum",
        applicationPeriod: "Annual",
        website: "https://www.licindia.in/"
    },
    {
        id: 9,
        name: "Godrej Scholarship",
        type: "Private",
        description: "Scholarship to promote diversity and inclusion in engineering",
        eligibility: "Merit and diversity criteria",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.godrej.com/"
    },
    {
        id: 10,
        name: "Sitaram Jindal Foundation Scholarship",
        type: "Private",
        description: "Scholarship for engineering students",
        eligibility: "Merit-based selection",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.sitaramjindalfoundation.org/"
    },
    {
        id: 11,
        name: "Swami Vivekananda Merit-Cum-Means Scholarship",
        type: "Government",
        description: "Scholarship for engineering and other professional courses",
        eligibility: "Merit and means criteria",
        amount: "₹25,000 per annum",
        applicationPeriod: "Annual",
        website: "https://svmmc.niyukti.in/"
    },
    {
        id: 12,
        name: "IET Diamond Jubilee Scholarship",
        type: "Professional",
        description: "Scholarship for engineering students",
        eligibility: "Merit-based selection",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://www.theiet.org/"
    },
    {
        id: 13,
        name: "Society of Women Engineers Scholarship",
        type: "Professional",
        description: "Scholarship specifically for women in engineering",
        eligibility: "Women engineering students",
        amount: "Varies",
        applicationPeriod: "Annual",
        website: "https://swe.org/"
    },
    {
        id: 14,
        name: "NTPC Scholarship Scheme",
        type: "Government",
        description: "Scholarship for SC/ST/OBC/PH category students",
        eligibility: "Category-based and merit criteria",
        amount: "₹20,000 per annum",
        applicationPeriod: "Annual",
        website: "https://www.ntpc.co.in/"
    }
];

// AI College Matchmaker Questions
const matchmakerQuestions = [
    {
        id: 1,
        question: "What's your preferred location in Kerala?",
        options: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Other"],
        weights: {
            location: 1.0
        }
    },
    {
        id: 2,
        question: "Which branch interests you the most?",
        options: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"],
        weights: {
            courses: 1.0
        }
    },
    {
        id: 3,
        question: "What's your budget range for college fees?",
        options: ["Below 50,000", "50,000 - 1,00,000", "1,00,000 - 2,00,000", "Above 2,00,000"],
        weights: {
            fees: 1.0
        }
    },
    {
        id: 4,
        question: "How important is research focus to you?",
        options: ["Very Important", "Somewhat Important", "Not Important"],
        weights: {
            researchFocus: 1.0
        }
    },
    {
        id: 5,
        question: "What's your preferred college size?",
        options: ["Large (2000+ students)", "Medium (1000-2000 students)", "Small (<1000 students)"],
        weights: {
            size: 0.5
        }
    }
];

// Gamified Interest Test Questions
const interestTestQuestions = [
    {
        id: 1,
        question: "What type of projects do you enjoy working on?",
        options: ["Building things", "Solving puzzles", "Creating art", "Writing code", "Analyzing data"],
        careerPaths: {
            "Building things": ["Mechanical", "Civil"],
            "Solving puzzles": ["Computer Science", "Electronics"],
            "Creating art": ["Design", "Architecture"],
            "Writing code": ["Computer Science", "Information Technology"],
            "Analyzing data": ["Data Science", "Computer Science"]
        }
    },
    {
        id: 2,
        question: "How do you prefer to learn?",
        options: ["Hands-on practice", "Theoretical study", "Group projects", "Online courses", "Research"],
        learningStyles: {
            "Hands-on practice": ["Workshop", "Lab"],
            "Theoretical study": ["Library", "Classroom"],
            "Group projects": ["Team", "Collaboration"],
            "Online courses": ["Digital", "Remote"],
            "Research": ["Lab", "Innovation"]
        }
    }
];

// Scholarship Categories
const scholarshipCategories = {
    needBased: ["PM-USP Yojana", "AICTE – SWANATH Scholarship"],
    meritBased: ["National Scholarships", "Ratan Tata Scholarship"],
    stateSpecific: ["Kerala State Scholarship", "Kerala Engineering Scholarship"],
    courseSpecific: ["Computer Science Scholarship", "Mechanical Engineering Scholarship"]
};

// College Life Score Weights
const collegeLifeScoreWeights = {
    academics: 0.3,
    placement: 0.2,
    facilities: 0.15,
    location: 0.1,
    studentLife: 0.15,
    research: 0.1
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeMatchmaker();
    initializeInterestTest();
    initializeScholarshipGenie();
    initializeCompareTool();
    initializeVirtualTour();
    initializeAlumniChat();
    initializeCollegeLifeScore();
    initializeDashboard();
});

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const searchFilters = document.createElement('div');
    searchFilters.className = 'search-filters mt-3';
    searchFilters.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <select class="form-select" id="locationFilter">
                    <option value="">All Locations</option>
                    ${[...new Set(colleges.map(c => c.location))].map(location => 
                        `<option value="${location}">${location}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="col-md-3">
                <select class="form-select" id="courseFilter">
                    <option value="">All Courses</option>
                    ${[...new Set(colleges.flatMap(c => c.courses))].map(course => 
                        `<option value="${course}">${course}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="col-md-3">
                <select class="form-select" id="feesFilter">
                    <option value="">All Fee Ranges</option>
                    <option value="0-50000">Below ₹50,000</option>
                    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                    <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                    <option value="200000-999999">Above ₹2,00,000</option>
                </select>
            </div>
            <div class="col-md-3">
                <select class="form-select" id="ratingFilter">
                    <option value="">All Ratings</option>
                    <option value="4.5">4.5 & Above</option>
                    <option value="4.0">4.0 & Above</option>
                    <option value="3.5">3.5 & Above</option>
                </select>
            </div>
        </div>
    `;
    searchInput.parentElement.appendChild(searchFilters);

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Add filter change listeners
    ['locationFilter', 'courseFilter', 'feesFilter', 'ratingFilter'].forEach(filterId => {
        document.getElementById(filterId).addEventListener('change', performSearch);
    });
}

function performSearch() {
    const searchTerm = document.querySelector('.search-box input').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const courseFilter = document.getElementById('courseFilter').value;
    const feesFilter = document.getElementById('feesFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;

    const results = colleges.filter(college => {
        // Basic search term match
        const basicMatch = 
            college.name.toLowerCase().includes(searchTerm) ||
            college.location.toLowerCase().includes(searchTerm) ||
            college.courses.some(course => course.toLowerCase().includes(searchTerm));

        // Location filter
        const locationMatch = !locationFilter || college.location === locationFilter;

        // Course filter
        const courseMatch = !courseFilter || college.courses.includes(courseFilter);

        // Fees filter
        let feesMatch = true;
        if (feesFilter) {
            const [min, max] = feesFilter.split('-').map(Number);
            const collegeFees = parseInt(college.fees.replace(/[^0-9]/g, ''));
            feesMatch = collegeFees >= min && collegeFees <= max;
        }

        // Rating filter
        const ratingMatch = !ratingFilter || parseFloat(college.rating) >= parseFloat(ratingFilter);

        return basicMatch && locationMatch && courseMatch && feesMatch && ratingMatch;
    });

    displaySearchResults(results);
}

function displaySearchResults(results) {
    // Create and display search results
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results animate-fade-in';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="alert alert-info text-center">
                <i class="fas fa-info-circle"></i> No colleges found matching your search criteria.
                <br>
                <small>Try adjusting your filters or search terms.</small>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = `
            <div class="results-summary mb-3">
                <p class="text-muted">
                    <i class="fas fa-search"></i> Found ${results.length} college${results.length === 1 ? '' : 's'} matching your criteria
                </p>
            </div>
            <div class="row">
                ${results.map(college => `
                    <div class="col-md-6 mb-4">
                        <div class="college-card">
                            <div class="card-header bg-primary text-white">
                                <h3 class="mb-0">${college.name}</h3>
                            </div>
                            <div class="card-body">
                                <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                                <p><i class="fas fa-star"></i> Rating: ${college.rating}/5</p>
                                <p><i class="fas fa-graduation-cap"></i> Placement: ${college.placement}</p>
                                <p><i class="fas fa-rupee-sign"></i> Annual Fees: ₹${college.fees}</p>
                                <div class="courses-container">
                                    <strong>Courses:</strong>
                                    <div class="mt-2">
                                        ${college.courses.map(course => 
                                            `<span class="badge bg-secondary me-2 mb-2">${course}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-3 w-100" onclick="viewCollegeDetails(${college.id})">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Replace existing results if any
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }

    // Add results to the page
    document.querySelector('.hero-section').appendChild(resultsContainer);
}

// College Matchmaker functionality
function initializeMatchmaker() {
    let userAnswers = {};
    let currentQuestion = 0;
    const quizContainer = document.getElementById('quiz-questions');
    const progressBar = document.querySelector('.progress-bar');

    function displayQuestion() {
        const question = matchmakerQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="question-card animate-fade-in">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="btn btn-outline-primary mb-2 w-100" 
                                onclick="selectMatchmakerOption(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        progressBar.style.width = `${((currentQuestion + 1) / matchmakerQuestions.length) * 100}%`;
    }

    window.selectMatchmakerOption = function(index) {
        const question = matchmakerQuestions[currentQuestion];
        userAnswers[question.id] = {
            answer: question.options[index],
            weights: question.weights
        };
        
        currentQuestion++;
        if (currentQuestion < matchmakerQuestions.length) {
            displayQuestion();
        } else {
            showMatchmakerResults();
        }
    };

    function calculateMatchScore(college, userAnswers) {
        let score = 0;
        let totalWeight = 0;

        for (const [questionId, answer] of Object.entries(userAnswers)) {
            const question = matchmakerQuestions.find(q => q.id === parseInt(questionId));
            const weight = answer.weights[Object.keys(answer.weights)[0]];
            
            if (question.question.includes("location") && college.location === answer.answer) {
                score += weight;
            } else if (question.question.includes("branch") && college.courses.includes(answer.answer)) {
                score += weight;
            } else if (question.question.includes("budget")) {
                const budgetRange = answer.answer.split(" - ");
                const collegeFees = parseInt(college.fees);
                if (collegeFees >= parseInt(budgetRange[0]) && collegeFees <= parseInt(budgetRange[1])) {
                    score += weight;
                }
            } else if (question.question.includes("research") && college.researchFocus === (answer.answer === "Very Important")) {
                score += weight;
            }
            
            totalWeight += weight;
        }

        return (score / totalWeight) * 100;
    }

    function showMatchmakerResults() {
        const matchedColleges = colleges.map(college => ({
            ...college,
            matchScore: calculateMatchScore(college, userAnswers)
        })).sort((a, b) => b.matchScore - a.matchScore);

        quizContainer.innerHTML = `
            <div class="results-card animate-fade-in">
                <h3>Your Perfect College Matches</h3>
                <div class="matched-colleges">
                    ${matchedColleges.slice(0, 5).map(college => `
                        <div class="college-match-card">
                            <div class="match-score">${Math.round(college.matchScore)}% Match</div>
                            <h4>${college.name}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                            <p><i class="fas fa-star"></i> Rating: ${college.rating}/5</p>
                            <p><i class="fas fa-graduation-cap"></i> Placement: ${college.placement}%</p>
                            <button class="btn btn-primary" onclick="viewCollegeDetails(${college.id})">
                                View Details
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    displayQuestion();
}

// Google Maps initialization
function initMap() {
    initializeMap();
}

// Fallback for Google Maps API
window.gm_authFailure = function() {
    console.error('Google Maps API failed to load');
    const mapContainer = document.getElementById('college-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="alert alert-warning">
                <h4>Google Maps is currently unavailable</h4>
                <p>We're having trouble loading the map. Please try again later or use the college list below.</p>
                <div class="college-list mt-3">
                    <h5>Colleges in Kerala:</h5>
                    <ul>
                        ${colleges.slice(0, 5).map(college => `
                            <li><strong>${college.name}</strong> - ${college.location}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
};

function initializeMap() {
    const mapContainer = document.getElementById('college-map');
    if (!mapContainer) return;

    // Remove loading indicator
    const loadingIndicator = mapContainer.querySelector('.map-loading');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }

    // Center map on Kerala
    const kerala = { lat: 10.8505, lng: 76.2711 };
    const map = new google.maps.Map(mapContainer, {
        zoom: 8,
        center: kerala
    });

    // Add markers for each college
    colleges.forEach(college => {
        const marker = new google.maps.Marker({
            position: college.coordinates,
            map: map,
            title: college.name
        });

        // Add info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h4>${college.name}</h4>
                    <p>${college.location}</p>
                    <button onclick="viewCollegeDetails(${college.id})">
                        View Details
                    </button>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// College details view
function viewCollegeDetails(collegeId) {
    const college = colleges.find(c => c.id === collegeId);
    if (!college) return;

    // Create and show modal with college details
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${college.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6><i class="fas fa-map-marker-alt"></i> Location</h6>
                            <p>${college.location}</p>
                            
                            <h6><i class="fas fa-graduation-cap"></i> Courses</h6>
                            <ul>
                                ${college.courses.map(course => `<li>${course}</li>`).join('')}
                            </ul>
                            
                            ${college.yearEstablished ? `
                                <h6><i class="fas fa-calendar-alt"></i> Established</h6>
                                <p>${college.yearEstablished}</p>
                            ` : ''}
                            
                            ${college.website ? `
                                <h6><i class="fas fa-globe"></i> Website</h6>
                                <p><a href="${college.website}" target="_blank">${college.website}</a></p>
                            ` : ''}
                        </div>
                        <div class="col-md-6">
                            <h6><i class="fas fa-star"></i> Rating</h6>
                            <p>${college.rating}/5</p>
                            
                            <h6><i class="fas fa-chart-line"></i> Placement Rate</h6>
                            <p>${college.placement}</p>
                            
                            <h6><i class="fas fa-rupee-sign"></i> Annual Fees</h6>
                            <p>₹${college.fees}</p>
                            
                            ${college.naacAccreditation ? `
                                <h6><i class="fas fa-award"></i> Accreditation</h6>
                                <p>${college.naacAccreditation}</p>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${college.facilities ? `
                        <div class="row mt-3">
                            <div class="col-12">
                                <h6><i class="fas fa-building"></i> Facilities</h6>
                                <div class="facilities-container">
                                    ${college.facilities.map(facility => `
                                        <span class="badge bg-primary me-2 mb-2">${facility}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    ${college.keyHighlights ? `
                        <div class="row mt-3">
                            <div class="col-12">
                                <h6><i class="fas fa-star"></i> Highlights</h6>
                                <ul>
                                    ${college.keyHighlights.map(highlight => `<li>${highlight}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    ` : ''}

                    <div class="row mt-3">
                        <div class="col-12">
                            <h6><i class="fas fa-gift"></i> Available Scholarships</h6>
                            <div class="scholarships-container">
                                ${scholarships.map(scholarship => `
                                    <div class="scholarship-card mb-3">
                                        <h6 class="mb-2">${scholarship.name}</h6>
                                        <p class="mb-1"><small>Type: ${scholarship.type}</small></p>
                                        <p class="mb-1"><small>Amount: ${scholarship.amount}</small></p>
                                        <p class="mb-1"><small>Eligibility: ${scholarship.eligibility}</small></p>
                                        <a href="${scholarship.website}" target="_blank" class="btn btn-sm btn-outline-primary">
                                            Learn More
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-12 text-center">
                            <button class="btn btn-primary" onclick="window.open('${college.website || '#'}', '_blank')">
                                Visit College Website
                            </button>
                            <button class="btn btn-outline-primary ms-2" onclick="compareColleges(${college.id})">
                                Compare with Other Colleges
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // Remove modal from DOM after it's hidden
    modal.addEventListener('hidden.bs.modal', function() {
        modal.remove();
    });
}

// Gamified Interest Test functionality
function initializeInterestTest() {
    let userInterests = {};
    let currentQuestion = 0;
    const interestTestContainer = document.getElementById('interest-test');

    function displayInterestQuestion() {
        const question = interestTestQuestions[currentQuestion];
        interestTestContainer.innerHTML = `
            <div class="interest-question-card animate-fade-in">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="btn btn-outline-primary mb-2 w-100" 
                                onclick="selectInterestOption(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.selectInterestOption = function(index) {
        const question = interestTestQuestions[currentQuestion];
        userInterests[question.id] = question.options[index];
        
        currentQuestion++;
        if (currentQuestion < interestTestQuestions.length) {
            displayInterestQuestion();
        } else {
            showInterestResults();
        }
    };

    function showInterestResults() {
        const careerPaths = new Set();
        const learningStyles = new Set();

        for (const [questionId, answer] of Object.entries(userInterests)) {
            const question = interestTestQuestions.find(q => q.id === parseInt(questionId));
            if (question.careerPaths && question.careerPaths[answer]) {
                question.careerPaths[answer].forEach(path => careerPaths.add(path));
            }
            if (question.learningStyles && question.learningStyles[answer]) {
                question.learningStyles[answer].forEach(style => learningStyles.add(style));
            }
        }

        interestTestContainer.innerHTML = `
            <div class="interest-results-card animate-fade-in">
                <h3>Your Career Path Matches</h3>
                <div class="career-paths">
                    <h4>Recommended Career Paths:</h4>
                    <div class="badges">
                        ${Array.from(careerPaths).map(path => 
                            `<span class="badge bg-primary me-2 mb-2">${path}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="learning-styles mt-3">
                    <h4>Your Learning Style:</h4>
                    <div class="badges">
                        ${Array.from(learningStyles).map(style => 
                            `<span class="badge bg-secondary me-2 mb-2">${style}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="matched-colleges mt-4">
                    <h4>Recommended Colleges:</h4>
                    ${colleges
                        .filter(college => 
                            Array.from(careerPaths).some(path => 
                                college.courses.some(course => course.includes(path))
                            )
                        )
                        .slice(0, 3)
                        .map(college => `
                            <div class="college-match-card">
                                <h5>${college.name}</h5>
                                <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                                <button class="btn btn-primary" onclick="viewCollegeDetails(${college.id})">
                                    View Details
                                </button>
                            </div>
                        `).join('')}
                </div>
            </div>
        `;
    }

    displayInterestQuestion();
}

// Scholarship Genie functionality
function initializeScholarshipGenie() {
    const scholarshipContainer = document.getElementById('scholarship-genie');
    
    function filterScholarships(filters) {
        return scholarships.filter(scholarship => {
            if (filters.type && scholarship.type !== filters.type) return false;
            if (filters.category && !scholarshipCategories[filters.category].includes(scholarship.name)) return false;
            return true;
        });
    }

    function displayScholarships(filteredScholarships) {
        scholarshipContainer.innerHTML = `
            <div class="scholarship-filters mb-4">
                <select class="form-select mb-2" id="scholarshipType">
                    <option value="">All Types</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Professional">Professional</option>
                </select>
                <select class="form-select" id="scholarshipCategory">
                    <option value="">All Categories</option>
                    <option value="needBased">Need Based</option>
                    <option value="meritBased">Merit Based</option>
                    <option value="stateSpecific">State Specific</option>
                    <option value="courseSpecific">Course Specific</option>
                </select>
            </div>
            <div class="scholarship-results">
                ${filteredScholarships.map(scholarship => `
                    <div class="scholarship-card animate-fade-in">
                        <h4>${scholarship.name}</h4>
                        <p><i class="fas fa-tag"></i> ${scholarship.type}</p>
                        <p><i class="fas fa-rupee-sign"></i> ${scholarship.amount}</p>
                        <p><i class="fas fa-info-circle"></i> ${scholarship.description}</p>
                        <p><i class="fas fa-check-circle"></i> ${scholarship.eligibility}</p>
                        <a href="${scholarship.website}" target="_blank" class="btn btn-primary">
                            Apply Now
                        </a>
                    </div>
                `).join('')}
            </div>
        `;

        // Add event listeners for filters
        document.getElementById('scholarshipType').addEventListener('change', updateScholarships);
        document.getElementById('scholarshipCategory').addEventListener('change', updateScholarships);
    }

    function updateScholarships() {
        const type = document.getElementById('scholarshipType').value;
        const category = document.getElementById('scholarshipCategory').value;
        const filteredScholarships = filterScholarships({ type, category });
        displayScholarships(filteredScholarships);
    }

    // Initial display
    displayScholarships(scholarships);
}

// Compare Tool functionality
function initializeCompareTool() {
    const compareContainer = document.getElementById('compare-tool');
    let selectedColleges = [];

    function updateCompareView() {
        compareContainer.innerHTML = `
            <div class="compare-controls mb-4">
                <select class="form-select" id="college1">
                    <option value="">Select College 1</option>
                    ${colleges.map(college => 
                        `<option value="${college.id}">${college.name}</option>`
                    ).join('')}
                </select>
                <select class="form-select" id="college2">
                    <option value="">Select College 2</option>
                    ${colleges.map(college => 
                        `<option value="${college.id}">${college.name}</option>`
                    ).join('')}
                </select>
                <select class="form-select" id="college3">
                    <option value="">Select College 3</option>
                    ${colleges.map(college => 
                        `<option value="${college.id}">${college.name}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="compare-results">
                ${selectedColleges.map(college => `
                    <div class="compare-card">
                        <h4>${college.name}</h4>
                        <div class="comparison-details">
                            <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                            <p><i class="fas fa-star"></i> Rating: ${college.rating}/5</p>
                            <p><i class="fas fa-graduation-cap"></i> Placement: ${college.placement}%</p>
                            <p><i class="fas fa-rupee-sign"></i> Fees: ₹${college.fees}</p>
                            <div class="courses">
                                <strong>Courses:</strong>
                                ${college.courses.map(course => 
                                    `<span class="badge bg-secondary me-2 mb-2">${course}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add event listeners for college selection
        ['college1', 'college2', 'college3'].forEach(id => {
            document.getElementById(id).addEventListener('change', function(e) {
                const collegeId = parseInt(e.target.value);
                if (collegeId) {
                    const college = colleges.find(c => c.id === collegeId);
                    if (college) {
                        selectedColleges[id.replace('college', '') - 1] = college;
                        updateCompareView();
                    }
                }
            });
        });
    }

    updateCompareView();
}

// Virtual Tour functionality
function initializeVirtualTour() {
    const tourContainer = document.getElementById('virtual-tour');
    
    function displayVirtualTour(collegeId) {
        const college = colleges.find(c => c.id === collegeId);
        if (!college) return;

        tourContainer.innerHTML = `
            <div class="virtual-tour-card">
                <h3>${college.name} - Virtual Tour</h3>
                <div class="tour-content">
                    <div class="video-container">
                        <iframe width="100%" height="400" 
                                src="https://www.youtube.com/embed/VIDEO_ID" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    <div class="360-view mt-3">
                        <h4>360° Campus View</h4>
                        <div class="view-container">
                            <!-- Add 360° view embed code here -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Alumni Chat functionality
function initializeAlumniChat() {
    const chatContainer = document.getElementById('alumni-chat');
    
    function displayChatInterface() {
        chatContainer.innerHTML = `
            <div class="chat-interface">
                <div class="chat-messages" id="chat-messages">
                    <!-- Messages will be displayed here -->
                </div>
                <div class="chat-input">
                    <input type="text" class="form-control" id="message-input" 
                           placeholder="Ask an alumni about their experience...">
                    <button class="btn btn-primary" onclick="sendMessage()">
                        Send
                    </button>
                </div>
            </div>
        `;
    }

    window.sendMessage = function() {
        const input = document.getElementById('message-input');
        const message = input.value.trim();
        if (message) {
            // Add message to chat
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML += `
                <div class="message user-message">
                    <p>${message}</p>
                </div>
            `;
            
            // Simulate alumni response
            setTimeout(() => {
                messagesContainer.innerHTML += `
                    <div class="message alumni-message">
                        <p>Thank you for your question! Our alumni will respond shortly.</p>
                    </div>
                `;
            }, 1000);

            input.value = '';
        }
    };

    displayChatInterface();
}

// College Life Score functionality
function initializeCollegeLifeScore() {
    function calculateCollegeLifeScore(college) {
        let score = 0;
        
        // Academic score (30%)
        score += (college.rating / 5) * collegeLifeScoreWeights.academics;
        
        // Placement score (20%)
        score += (college.placement / 100) * collegeLifeScoreWeights.placement;
        
        // Facilities score (15%)
        score += (college.facilities.length / 5) * collegeLifeScoreWeights.facilities;
        
        // Location score (10%)
        score += 0.8 * collegeLifeScoreWeights.location; // Assuming good location
        
        // Student life score (15%)
        score += 0.7 * collegeLifeScoreWeights.studentLife; // Assuming decent student life
        
        // Research score (10%)
        score += (college.researchFocus ? 1 : 0.5) * collegeLifeScoreWeights.research;
        
        return Math.round(score * 100);
    }

    // Add college life score to college cards
    colleges.forEach(college => {
        college.lifeScore = calculateCollegeLifeScore(college);
    });
}

// Personalized Dashboard functionality
function initializeDashboard() {
    const dashboardContainer = document.getElementById('dashboard');
    let savedColleges = [];
    let applicationDeadlines = [];
    
    function updateDashboard() {
        dashboardContainer.innerHTML = `
            <div class="dashboard-grid">
                <div class="dashboard-card saved-colleges">
                    <h3>Saved Colleges</h3>
                    ${savedColleges.map(college => `
                        <div class="saved-college-item">
                            <h4>${college.name}</h4>
                            <p><i class="fas fa-map-marker-alt"></i> ${college.location}</p>
                            <button class="btn btn-primary" onclick="viewCollegeDetails(${college.id})">
                                View Details
                            </button>
                        </div>
                    `).join('')}
                </div>
                
                <div class="dashboard-card deadlines">
                    <h3>Application Deadlines</h3>
                    ${applicationDeadlines.map(deadline => `
                        <div class="deadline-item">
                            <h4>${deadline.college}</h4>
                            <p><i class="fas fa-calendar"></i> ${deadline.date}</p>
                        </div>
                    `).join('')}
                </div>
                
                <div class="dashboard-card alerts">
                    <h3>New Alerts</h3>
                    <div class="alert-list">
                        <!-- Alerts will be dynamically added here -->
                    </div>
                </div>
            </div>
        `;
    }

    // Initial dashboard update
    updateDashboard();
} 