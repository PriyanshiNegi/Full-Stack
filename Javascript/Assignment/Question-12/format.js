
// const local = current.toLocaleString('en-GB', { timeZone: 'IST' });
// console.log(local);

// const localCN = current.toLocaleString('en-CN', { timeZone: 'IST' });
// console.log(localCN);

// YYYY-MM-DD HH:mm

    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1; // adding 1 as getMonth() returns zero-based number
    const date = todayDate.getDate();
    const hours = todayDate.getHours();
    const minutes = todayDate.getMinutes();

    const formatOne = `${year}-${month}-${date} ${hours}:${minutes}`;
    console.log(formatOne);

//  DD-MM-YYYY HH:mm

    const formatTwo = `${date}-${month}-${year} ${hours}:${minutes}`;
    console.log(formatTwo);

// DD/MM/YYYY HH:mm

    const formatThree= `${date}/${month}/${year} ${hours}:${minutes}`;
    console.log(formatThree);