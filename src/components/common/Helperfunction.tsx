export const isMobileValidNumber = (mobileNumber: any) => {
    if (mobileNumber.length > 10) {
        return false;
    }
    mobileNumber = parseInt(mobileNumber, 10);
    const mob = /^\d{10}$/;
    return mob.test(mobileNumber);
};

export const dumpData = (data: any) => {
    const dataDump: any = []
    let rowId = 1;
    if (data.length > 0) {
        data.map((refs: any, i: number) => {
            const dataSales: any = {};
            dataSales['name'] = refs.firstname + " " + refs.lastname
            dataSales['email'] = refs.email
            dataSales['phone'] = refs.phone
            dataSales['hasPremium'] = refs.hasPremium
            dataSales['bids'] = Math.max(...refs.bids.map((o: any) => o.amount), 0);
            dataSales['bidsData'] = refs.bids
            dataSales['avtar'] = refs.avatarUrl
            dataDump.push(dataSales)
        })
        return dataDump
    }
}