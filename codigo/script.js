document.addEventListener("DOMContentLoaded", function () {
    const malwareList = document.getElementById("malware-list");
    const popup = document.getElementById("popup");
    const closePopup = document.querySelector(".close");
    const downloadLink = document.getElementById("download-link");

    // Lista de nombres de malware con sus URLs de descarga
    const malwares = [
                { name: "Lockbit", url: "https://mega.nz/file/GZxGQISL#GLzYgQyOTY2j8h_EOjL7_zuy1JNlwNd4q-eY-sHMqas" },
                { name: "Alina", url: "https://mega.nz/file/g9JGxaQQ#6w1kVEljVMm3l9ceFSkJ73DZSnJ8gguqPxlp9TlK5hs" },
                { name: "andr0id_l0cker", url: "https://mega.nz/file/pg4g3CbC#FnNbz9rMx_eQIjSKwlZ8teSgjqoVne_87coDMdnomf4" },
                { name: "Android.CEREBRUS", url: "https://mega.nz/file/54QElKRI#V5zTGeuo_q17N6PBt6L_rdYPG63SXUIFqcfBHSP7cTg" },
                { name: "Android.Dendriod", url: "https://mega.nz/file/whBAABrZ#cBnLB6cdRNezStc0Wkw9aJunwNs-0JYS1DuqnhRUedg" },
                { name: "Android.Dendroid.B", url: "https://mega.nz/file/x4QnlK5a#R7WY7msRp4-Ap7IVonj6cCPeLJbRMT-AZZq6hNOtFIw" },
                { name: "Andromeda", url: "https://mega.nz/file/95Z1USDD#rwbiUspE-5WAIhIrM_d-WLPgrwl0tk7q094aEE3Dc5Y" },
                { name: "APT34", url: "https://mega.nz/file/U9QiDDSC#i35MHNGOPFEN8z6xkj5XoEUJtMEv9s1z1pkAoJnkBoA" },
                { name: "AryanRAT_March2010", url: "https://mega.nz/file/xlACzTgS#p3b4RP4sALcPwtg4m4dYBqWAzSURMXhhrN2gY_Ad83A" },
                { name: "AsyncRAT", url: "https://mega.nz/file/txgDnapS#E8J-mK9UtiRBErHlviIMAR9gXzlf-2C3tNTOJieSH_I" },
                { name: "Athena", url: "https://mega.nz/file/sl5mBQhb#qVTrPT-tAm9ex1zBhH6gHdKxCser_HpkiiW3Vm7PjVc" },
                { name: "BlackDream", url: "https://mega.nz/file/RthU3QSS#MM1NSBECoicOeDpbRb1754mW4cxqkowo8-32XildwHc" },
                { name: "BshadesFusion", url: "https://mega.nz/file/VlhDWZCD#pPdz0VzWPr_LKtNU7jMgBB_TzqnCL8DyV2-O2FEdKAY" },
                { name: "Carberp", url: "https://mega.nz/file/hp4V3ZRL#hPhjoA39VvkmEaNMuZyynZRMsMvVJa-4xuCb_yO7AVE" },
                { name: "conti_locker", url: "https://mega.nz/file/M8IjySJa#Vmppnb3bm2Zbqps5_SJZPE1rU15Uj_X1NnXLhptAkLc" },
                { name: "CyberBotv2.2_October2006", url: "https://mega.nz/file/xphFEBjJ#eOa8a19NQzfisUcuSo3e5X_MggzFs75QAbIlC6epU_c" },
                { name: "DBotv3.1_March2007", url: "https://mega.nz/file/98AzyL4R#d1F4JpJujaramnO1hb0npFSXms88dZ6OHYokNgfYDlc" },
                { name: "Dendroid", url: "https://mega.nz/file/19JkUazS#xjobPlkOzAxpwU8nsyyqm5FQ6-1X3F4jAJ6XxuUkVJY" },
                { name: "Dexter", url: "https://mega.nz/file/FwpEAAKI#yyfFFWbPuyPvWL9ZTdvleHCacxa6C-UcNHsKOYIMpCw" },
                { name: "Dokan_Dec2008", url: "https://mega.nz/file/JxYDUC7B#pDWoH4pLJWrEkavPNQnlBBgmsES26AWITc2HQlkRzsc" },
                { name: "DopeBot.A_Dec2004", url: "https://mega.nz/file/thgVUZTT#3ueO7-C-Z2Z2Iwrtt2MB0dg95d6jQMZFZDAEuODy9Kc" },
                { name: "DopeBot.B_Dec2004", url: "https://mega.nz/file/ZpgBHTyb#u2tAnvNb7W6NeQ0hkthJ_HhsqashZAa0acw9uzpFIrg" },
                { name: "DopeBotv0.22_CrippledFeb2007", url: "https://mega.nz/file/A4YHjLyD#hLOxZnMv20aMcWTKrx-6APGLvWuCrk7ru1cJofRB0EM" },
                { name: "DopeBotv0.22_UnCrippled_Feb2007", url: "https://mega.nz/file/psgwBYaB#3XnpuaK1NW9T2hejFGtc_yqGBmEj13FiN5eUp1xfflE" },
                { name: "EngRat", url: "https://mega.nz/file/w4YCWZwD#H1dEiXrABTA-qz8KYqCHNnOxG2_qsx-ZhRNxxiryTEw" },
                { name: "ExploitKit.0x88", url: "https://mega.nz/file/hpgE0QAR#Lj6p_sl3JvJVhdFWLg_3_ZznSYWg_LyvkEMy62ApY9o" },
                { name: "ExploitKit.BlackHole.100", url: "https://mega.nz/file/R1RnjDzB#MAAXTxivAHBge1eAmw7-o94cJP6w-YfHj_qqB7f7dqM" },
                { name: "ExploitKit.BlackHole.102", url: "https://mega.nz/file/Zox2QY7R#QcjIq72N6mTIcvEnQ4eE42tKC8qPLMs0_A31yuA9RvI" },
                { name: "ExploitKit.BleedingLife.2", url: "https://mega.nz/file/JxRUwKKZ#nuccsFhxKmBEnrC9nipIrVu5roAnlkiCITObEibs4EU" },
                { name: "ExploitKit.CrimePack.3.1.3", url: "https://mega.nz/file/9g4ySLDB#S0JOrhlVkjciJIB2IPB2r8G4wkldpepg9Kxjj-UVgbs" },
                { name: "ExploitKit.DemonHunter", url: "https://mega.nz/file/0toHHbqB#Xyb_e3umXyYFTL_LODMhUFJ1-jxnhbd_AMJJ0FOv4JA" },
                { name: "ExploitKit.Eleonore.1.4.4", url: "https://mega.nz/file/k9wRxLDb#QbYfU9NjPLLPlEFl9m_u2JITrIt0ImLUsnxIWbIABYo" },
                { name: "ExploitKit.Fragus", url: "https://mega.nz/file/E5AlEboD#gagAC8D7chVeMXQoZvih3V9qkVM1lmIJSsJxLyy64iQ" },
                { name: "ExploitKit.Phoenix.2.5", url: "https://mega.nz/file/R5Rwnaoa#tttEBfQHe0rE285irUkVZsuKaDHGgWufqca6h-GTmmo" },
                { name: "ExploitKit.RIG", url: "https://mega.nz/file/cl4TUTTC#BhwTPZp_rVpACaq04JusiiGnHPq2fbmKvWULmkfV3q0" },
                { name: "ExploitKit.Sakura", url: "https://mega.nz/file/hthAhb4C#I9cwpTen-SX8rZUvCUSBuNrodii_uFhtTOAzk3xKz1M" },
                { name: "ExploitKit.Sava", url: "https://mega.nz/file/8s4RUKzB#q_vcKAWK4nhp6LhGsA-eWiQbHFHWgHxlzTLfFd9bZnM" },
                { name: "Grum", url: "https://mega.nz/file/Q9xSmLIZ#IrftV_WIjg1U2KWqY0fum8E_9FW7kgEJLu7HOYKoKd4" },
                { name: "HellBotv3.0_10June2005", url: "https://mega.nz/file/w5RmhA4S#EVMWDhNKix5WA-6LqjLT6wJ5VOlpvAPmHqr-hEvlNzQ" },
                { name: "IoT.Mirai", url: "https://mega.nz/file/AhwhgLCS#l5sdSmUOJvULvmM9xChtW5F2tMK065E_cohh05wK2Gk" },
                { name: "KINS_Dec2011", url: "https://mega.nz/file/Q14lDQQD#TJmm9D1H6D_lPplJjiZQHm4GhYGe43PTcRaTnGhOpGo" },
                { name: "LiquidBot_May2005", url: "https://mega.nz/file/EpBEFQqS#iJlLC-g2NylJDSek30ZW0nssz1C9Dvsq7dAxq1Y7yWk" },
                { name: "LoexBot1.3_Sep2008", url: "https://mega.nz/file/MsZhXChL#AYeQspy40gqlBRahh1TDsmItUkSzUNfOKIYV68euk4M" },
                { name: "Mazar", url: "https://mega.nz/file/I8Zk2QjT#ZRvSzKqjq6vtGfbGpTvPNFgNvT83ThY9-Qc4phg_DZI" },
                { name: "NBot_July2008", url: "https://mega.nz/file/14ojlSQL#QAWt8U1fDp1GGoY7oom37bWHlT0neUTbSOTSIXto8_c" },
                { name: "NjRAT_0.7d", url: "https://mega.nz/file/o5oSHBYJ#CwvvECEDAg-Vm7FLHy4Jur9d0yH0tDU4xj8coVMu4wE" },
                { name: "NullBot_Dec2006", url: "https://mega.nz/file/9wox2Ypb#qgyqsmEIQvTAOVKQahzNwidkwVX5BjqHKnJj22Cgzis" },
                { name: "PlasmaHTTP", url: "https://mega.nz/file/FtQhERIb#wvZXiPuMlwNfrvjrUCgrZuPS9vitYjxEoe0QkCXvZQM" },
                { name: "PowerLoader", url: "https://mega.nz/file/49h0BBpa#a9mq71aGeULcLvp0SA0d4t-Ucf2P91MtZrLSXuxN6Zc" },
                { name: "Ransomware.Jigsaw", url: "https://mega.nz/file/U0ZWAaTY#TdXjELJhVLYTcdBKemc3CxI7tNPfFq25q0BFZ0eAbrw" },
                { name: "rBot0.3.3_May2004", url: "https://mega.nz/file/RsBn1YJb#F5-ng2uDqthsf2IBk3mBOuf-33dt5YD-nUa0eMmHDpw" },
                { name: "Rovnix", url: "https://mega.nz/file/A4ghCC6R#GC9sTZnxLV5_zybzSvrfAVa2etXBy0xJkfksRtVuZYs" },
                { name: "Rubilyn", url: "https://mega.nz/file/8kA0XT7K#JaQBDGSBBjn09_eAVVe4ISQE9vyP0NWbW8VB5coqhH4" },
                { name: "ShadowBot_Sep2008", url: "https://mega.nz/file/c0QGlLDT#GfI01QZx5EDtNlbhX5blngI_DsjjT_VYgdJbpN8cusY" },
                { name: "ShadowBotv3_March2007", url: "https://mega.nz/file/BpJAGTSC#-BxXf-ZckSn4ClLSlOxoRBDsT_hkfisUrl4F5POBaLI" },
                { name: "SpazBot2.12_June2007", url: "https://mega.nz/file/c9AUkJIL#7yQjSfP0wGrFaJWdTx1WqLlyyr6wb-EK7HbULjoJdyQ" },
                { name: "TinyBanker_Jan2012", url: "https://mega.nz/file/toABiaob#tjvrgbRKzsaMyo2VH4Tr8RbPK4uxQSnX1gaT09j8FGY" },
                { name: "v0lk", url: "https://mega.nz/file/wkojySoa#zt1ane-7t7KUOWl-jEeMyWXdotf-BbmwVP10pbWATLU" },
                { name: "vbBot_Jan2007", url: "https://mega.nz/file/5wpniAoZ#CDdVed3baQpR4CgkO1mRk44Ad4tGLHu2fpXcI9OINsA" },
                { name: "VBS.Win32.Vabian", url: "https://mega.nz/file/h9IGwbDZ#pN4Zec1FRNwNRbhg0bfnHZgDLKXf22YTuK5_PYjI6vQ" },
                { name: "W32.MyDoom.A", url: "https://mega.nz/file/ltRFRI4K#VFxyOXvhxo4tvu3e_PluZPzDTvRtH7hVcFwiT2B3oiE" },
                { name: "Win32.AgentTesla", url: "https://mega.nz/file/kpACATgY#qLmDYcsRIo67HqcEA-6U_cKQU96dNNxrK0cEykiXw8c" },
                { name: "Win32.APT34.PoisionFrog", url: "https://mega.nz/file/VlA0jLII#KGRK7bcPqSjf875wwTlmgGL1mRpu841KLztYRZEgCNI" },
                { name: "Win32.BlackWorm", url: "https://mega.nz/file/pg5xRTzD#9etwAsKhXNF58IdQfuvnCs9xiS8fpIH1CQ9EVkchzQ0" },
                { name: "Win32.Carbanak", url: "https://mega.nz/file/8lhkgbJD#LHn4r0OpgCX4v6DhdKdKNJ_zxZ5QqRTu8RH0wKlN6gk" },
                { name: "Win32.DiamondRAT", url: "https://mega.nz/file/5xQB2Q7Q#xWgUdSVp5nrfXQyvmjB9bPTETPqE0xfVfsXeteyqI_Y" },
                { name: "Win32.litehttp", url: "https://mega.nz/file/UpwUkZzB#n5qL35LG2bFLEYEbGqXw-Ug1q6S1riTG1FvRjN3N4ks" },
                { name: "Win32.LoexBot1.3", url: "https://mega.nz/file/MppECIjQ#TAXa1ReJKuZ4ufwVBNQkYuiktlzjjYXnzjG0FI67Xsg" },
                { name: "Win32.LokiRAT", url: "https://mega.nz/file/glwFnILQ#uf3phXVk3QGo2IcLGfLvMdj9STXYNVrr29gQ-hXCQ6U" },
                { name: "Win32.LuxNET", url: "https://mega.nz/file/8po0VLKK#fNPzW22aDCd1BsNF4aidKwJlmvT95OwAs1bPwmxLkdY" },
                { name: "Win32.MCRYPT", url: "https://mega.nz/file/QkAkHTaa#C4efosweQEzOrQpoNSTg7UaMjDmHnmdb4KxF_xSvHqc" },
                { name: "Win32.MiniPig_Nov2006", url: "https://mega.nz/file/FsgHnSoJ#b9EWQ6hqsRF5QyKPp15ShkbwiAcs6Em05Hz8b9SdhiY" },
                { name: "Win32.Mirai", url: "https://mega.nz/file/5lpREZKb#6cS-L9yCwjn_x76tiLlWgxXzxtvXMAlqDVFGWB2ewUE" },
                { name: "Win32.Mirai.2016", url: "https://mega.nz/file/pwxj0ShD#kfGjmHEheIUVav_U2nBf5ddThl88OEX2WQNHaDlBrCk" },
                { name: "Win32.MuddyWaterC", url: "https://mega.nz/file/B8QBEbLQ#Q1B8iZtS-qFbLw_9yF6ORtqoMiMd1xgUVmWbNzfrcBc" },
                { name: "Win32.NinjaBot", url: "https://mega.nz/file/I0RyRaoT#aMnFKyQhOVT77bGOK11h2oeBoA--oQPVyXZE10zd9cQ" },
                { name: "Win32.njRAT", url: "https://mega.nz/file/xx53hS7C#KtU2Fm-056R8Ph-uuJZl4oh50rGRAPT67aAgDAPY58w" },
                { name: "Win32.ogw0rm_Nov2008", url: "https://mega.nz/file/0sJSXB5A#EXhP8rrlP7jzisBxcCxlC84FDCC1hsjfuVlR0_abfQU" },
                { name: "Win32.Pegasus", url: "https://mega.nz/file/okQlhb4J#-VxzJ0mtYcGzt5egGAl5QtwxDn1ZmzSAP3lN5pdamYA" },
                { name: "Win32.QuasarRAT", url: "https://mega.nz/file/84wkWKDK#paPVOjAZyWd-AHR63f7fTOo-ZZQ2_g7NOqNNvSd4Uvc" },
                { name: "Win32.Remhead", url: "https://mega.nz/file/cpBgCDgQ#aYtz6jIbmykyc1ns6cmNNMUItYfKn6kBvLXQpjAcqDY" },
                { name: "Win32.ShadowTech", url: "https://mega.nz/file/dlYARKrZ#QJ_-ymhtBoKTTZdIe42jjHqynn2INTob80FsYLCA5Jc" },
                { name: "Win32.TinyBanker", url: "https://mega.nz/file/lggi2BxD#KZQxYsxPgWgsm-LfzUNVeh6_kPvYNnSjwMELlcjyyMY" },
                { name: "Win32.Zeus.b", url: "https://mega.nz/file/Iwgy0DCR#toBhjdhRhhPm5eHSnvaa8qOI7-DjfBfdAxVasTWb1ho" },
                { name: "Win9x.LegacyASM", url: "https://mega.nz/file/Fg5wUbhb#sn02GMbLXt4XoDfIo52mDaPj4Ekl2x0CV00IeBcjCeU" },
                { name: "X0R-USB_Jan2009", url: "https://mega.nz/file/sxR2iJ4b#pXzxBzOSWZqx3A7W_kJvMxl_8SEaAx5CVRWlRaN9t1M" },
                { name: "xTBot0.0.2_2Feb2002", url: "https://mega.nz/file/B5xlEDAY#5j0iaVtVGJ2Eh7PxAE2RiwY3IHp5ne1WYIdKsEXVHos" },
                { name: "XtremeRAT_March2009", url: "https://mega.nz/file/YkgkxRLL#RJ9pOKcif7PJ2c9s6HSy5jmZ7bhEkyYHYSiPxxHjC4k" },
                { name: "Zemra", url: "https://mega.nz/file/w54wTCjI#hKHDpKEK9Pa2nNzshw-Mq-_odfdbUTQYBZ19eVw3OgY" },
                { name: "ZeuS2.0.8.9_Feb2013", url: "https://mega.nz/file/p5hnzYII#xmhSiFfwgOz-tSC6XLgJAlte0mnDcel64jOmhPc4Q-A" },
                { name: "ZIB_Trojan", url: "https://mega.nz/file/opgxVDyA#S6cmeoBteDCK67gnuKdEiJwSl7DACTQaDfeLzF8GjPU" },
                { name: "ZunkerBot1.4.5_Sep2007", url: "https://mega.nz/file/9ogD3KAZ#g3rizGL2myaCxEQgPpI7I0WE4YiK8W7-avtd5ftrc9c" },

        // Agrega los 91 nombres de malware y sus URLs aquí
    ];

    // Generar la lista de malware
    malwares.forEach((malware, index) => {
        const li = document.createElement("li");
        li.textContent = `${malware.name} 📁`;
        li.addEventListener("click", () => {
            // Mostrar el popup
            popup.style.display = "flex";
            // Actualizar el enlace de descarga con la URL correspondiente
            downloadLink.href = malware.url;
        });
        malwareList.appendChild(li);
    });

    // Cambiar el ícono cada 5 segundos
    setInterval(() => {
        const folders = document.querySelectorAll("li");
        folders.forEach((folder) => {
            if (folder.textContent.includes("📁")) {
                folder.textContent = folder.textContent.replace("📁", "👾");
            } else {
                folder.textContent = folder.textContent.replace("👾", "📁");
            }
        });
    }, 5000);

    // Cerrar el popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Cerrar el popup si se hace clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});