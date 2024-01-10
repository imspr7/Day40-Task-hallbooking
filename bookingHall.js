const booking_ids = [
  {
    booking_id: 11,
    hall_id: 1,
    booked_at: ["2 jan 2023 6.30pm", "4 jan 2023 11.30pm"],
    customer_id: 1,
  },
  {
    booking_id: " ",
    hall_id: 2,
    booked_at: [],
    customer_id: 1,
  },
  {
    booking_id: 13,
    hall_id: 3,
    booked_at: ["17 Jul 2023 9.30am", "18 jul 2023 10.30pm"],
    customer_id: 1,
  },
];

const customer_ids = [
  {
    customer_id: 1,
    customer_name: "sree",
    customer_address: "coimbatore city",
    booked_id:'',
  },
];



const hall_ids = [
  {
    hall_id: 1,
    available_now:false,
    hall_size: "10*10*10",
    stage_size: "8*8*8",
    seats: 50,
    price_per_hour: "1500",
    Address: "a1",
  },
  {
    hall_id: 2,
    available_now:false,
    hall_size: "11*11*11",
    stage_size: "9*9*9",
    seats: 50,
    price_per_hour: "1500",
    Address: "a2",
  },
  {
    hall_id: 3,
    available_now:false,
    hall_size: "12*12*12",
    stage_size: "10*10*10",
    seats: 50,
    price_per_hour: "1500",
    Address: "a3",
  },
  {
    hall_id: 4,
    available_now:false,
    hall_size: "10*10*10",
    stage_size: "8*8*8",
    seats: 50,
    price_per_hour: "1500",
    Address: "a4",
  },
  {
    hall_id: 5,
    available_now:false,
    hall_size: "15*15*15",
    stage_size: "6*6*6",
    seats: 80,
    price_per_hour: "3000",
    Address: "a5",
  },
];


//updating the current and history of booking

setInterval(() => {





    const checkout = booking_ids.filter(
       (booked) => new Date(booked.booked_at[1]) < Date.now
     );

     
   
     checkout.forEach((hall)=>{
       const customer = booking_history.find(customer=>customer.customer_id == hall.customer_id)
       if(customer) booking_history.forEach((history)=>{
          
           if(history.customer_id == hall.customer_id){
               const newHistory ={...hall,status:"checked_out"}
               history.booked_lists.push(newHistory)
           }
   
       })
       else{ 
        const newHistory=  {
               customer_id: hall.customer_id,
               booked_lists: [
                 {
                   hall_id: hall.hall_id,
                   booking_id:hall.booking_id,
                   booking_status: "checked_out",
                   start_time: hall.booked_at[0],
                   end_time: hall.booked_at[1],
                 },
                   ],
             };
           booking_history.push(newHistory)}
     })

//setting current availability
     hall_ids.forEach((hall)=>{
      booking_ids.forEach((booking)=>{
       if (booking.hall_id==hall.hall_id){
        ((new Date(booking.booked_at[0])<= new Date())&&(new Date()<new Date(booking.booked_at[1])))?hall.available_now=false:hall.available_now=true
       }
  
  })
    })
   }, 60000 * 30);

   const booking_history = [
    {
      customer_id: 1,
      booked_lists: [
        {
          hall_id: 1,
          booking_id: 11,
          booking_status: "Yes",
          start_time: "2 jan 2023 6.30pm",
          end_time: "4 jan 2023 11.30pm",
        },
          ],
    },
  ];

module.exports = {
  booking_ids,
  customer_ids,
  hall_ids,
  booking_history,
};
