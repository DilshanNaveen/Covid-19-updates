fetch('https://hpb.health.gov.lk/api/get-current-statistical')

    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        // global data
        document.getElementById('global-deaths').innerHTML = "Global Deaths : " + data.data.global_deaths;
        document.getElementById('global-new-cases').innerHTML = "Global New Cases : " + data.data.global_new_cases; 
        document.getElementById('global-new-deaths').innerHTML = "Global New Deaths : " + data.data.global_new_deaths; 
        document.getElementById('global-recovered').innerHTML = "Global Recovered : " + data.data.global_recovered; 
        document.getElementById('global-total-cases').innerHTML = "Global Total Cases : " + data.data.global_total_cases;  

        // local data
        document.getElementById('local-deaths').innerHTML = "Local Active Cases : " + data.data.local_active_cases;
        document.getElementById('local-new-cases').innerHTML = "Local Deaths : " + data.data.local_deaths; 
        document.getElementById('local-new-deaths').innerHTML = "Local New Cases : " + data.data.local_new_cases; 
        document.getElementById('local-recovered').innerHTML = "Local Recovered : " + data.data.local_recovered; 
        document.getElementById('local-total-cases').innerHTML = "Local Total Cases : " + data.data.local_total_cases;

        document.getElementById('updated-time').innerHTML = "Updated Time : " + data.data.update_date_time;  
    });
