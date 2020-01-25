var teamNames = ["Bayer 04 Leverkusen","BV Borussia 09 Dortmund","FC Bayern München","Chelsea FC","Liverpool FC","Manchester City FC","Tottenham Hotspur FC","Club Atlético de Madrid","FC Barcelona","Real Madrid CF","Valencia CF","Atalanta BC","FC Internazionale Milano","Juventus FC","SSC Napoli","FC Porto","Lille OSC","Olympique Lyonnais","Paris Saint-Germain FC","Galatasaray SK","Qarabağ Ağdam FK","PAE Olympiakos SFP","PSV","AFC Ajax","RB Leipzig","FC Basel 1893","FK Zenit Sankt-Petersburg","Celtic FC","NK Maribor","FK BATE Borisov","APOEL FC","GNK Dinamo Zagreb","FK Dynamo Kyiv","Club Brugge KV","Rosenborg BK","SK Slavia Praha","KRC Genk","BSC Young Boys","Dundalk FC","F91 Dudelange","FC København","FC Red Bull Salzburg","FC Santa Coloma","FC Sheriff Tiraspol","FC Viktoria Plzeň","Astana FK","FK Shakhtar Donetsk","Linfield FC","Medipol Başakşehir FK","PFK Ludogorets 1945 Razgrad","Sport Lisboa e Benfica","The New Saints FC","LASK Linz","FK Sarajevo","Nõmme Kalju FC","Helsingin JK","AIK Fotboll","FK Krasnodar","FK Lokomotiv Moskva","FC CFR 1907 Cluj","GKS Piast Gliwice","Valletta FC","FK Sūduva Marijampolė","Rīga FC","Maccabi Tel Aviv FC","KF Valur","Ferencvárosi TC","PAOK FC","Lincoln Red Imps FC","FK Crvena Zvezda","FK Sutjeska Nikšić","KF Shkëndija 79","FK Partizani","ŠK Slovan Bratislava","KF Feronikeli","SP Tre Penne","FC Ararat-Armenia","FC Saburtalo","HB"];

var teamShortNames = ["Leverkusen","Dortmund","Bayern M","Chelsea","Liverpool","Man City","Tottenham","Atleti","Barça","Real Madrid","Valencia","Atalanta","Inter","Juventus","Napoli","Porto","Lille","Olympique Lyon","PSG","Galatasaray","Qarabağ Ağdam","Olympiakos","PSV","Ajax","RB Leipzig","Basel","Zenit","Celtic","Maribor","BATE","APOEL","Dinamo Zagreb","Dynamo Kyiv","Club Brugge","Rosenborg","Slavia Praha","KRC Genk","Young Boys","Dundalk","F91 Dudelange","København","RB Salzburg","Santa Coloma","Sheriff","Viktoria Plzeň","Astana FK","Shaktar","Linfield","Başakşehir","Ludogorets","SL Benfica","The New Saints","LASK","Sarajevo","Nõmme Kalju","HJK","AIK Fotboll","Krasnodar","Lok Moskva","CFR Cluj","Piast Gliwice","Valletta","FK Sūduva","Rīga FC","Maccabi TA","Valur","Ferencváros","PAOK FC","Lincoln","Crvena Zvedza","Sutjeska Nik","Shkëndija 79","Partizani","Sl. Bratislava","Feronikeli","Tre Penne","Ararat-Armenia","Saburtalo","HB"];


var teamNames1 = [];
var teamshortNames1=[];

$.ajax({
    headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
    url: 'http://api.football-data.org/v2/competitions/2001/teams' ,
    dataType: 'json',
    type: 'GET'
    }).then(function(response){
        
        // console.log(response.teams.length);

        for(var i=0; i<response.teams.length;i++){
            newTeams111 = response.teams[i].name;
                       
            var arrTeams = teamNames1.push(newTeams111);
            console.log (arrTeams);
        }
      
    });

  