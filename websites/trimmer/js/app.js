(function () {
    ScrollReveal({ reset: true });

    var slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    };

    ScrollReveal().reveal('.logitech', slideUp);
    ScrollReveal().reveal('.xbox', slideUp);
    ScrollReveal().reveal('.twitch', slideUp);
    ScrollReveal().reveal('.asus', slideUp);

    //ScrollReveal().reveal('.circle__banner',{ delay: 500 });


    /**DropDown Nav */
    {
        function dropDown() {
            const toggler = document.getElementById("dropdownToggler");
            const targetId = toggler.attributes["data-target"].value;
            const target = document.getElementById(targetId);

            let isToggle = false;

            {
                function navShowHide() {
                    if (isToggle === false) {
                        target.style.display = "";
                        isToggle = true;
                        //console.log(isToggle);
                    }
                    else {
                        target.style.display = "block";
                        isToggle = false;
                        //console.log(isToggle);
                    }
                }
                toggler.addEventListener("click", navShowHide);
            }
        }
        //dropDown();
    }
});

{
    function heartbeat() {
        let heart = document.querySelectorAll(".fa-heartbeat");

        heart.forEach(function (element) {
            let isLiked = false;
            function liked() {
                if (isLiked === false) {
                    element.style.color = "#ff0000";
                    isLiked = true;
                } else {
                    element.style.color = "#202124";
                    isLiked = false;
                }
            }
            element.addEventListener("click", liked);
            //console.log(element);
        });
    };
    setTimeout(() => {
        heartbeat();
    }, 1000);;
}


{
    function dropdown() {
        const toggler = document.querySelector("#toggler");
        const dataTarget = toggler.attributes["data-target"].value;
        const target = document.getElementById(dataTarget);
        //console.log(target);

        let istoggle = false;

        function expand() {
            const i = document.createElement("i");
            if (target.classList.contains("expand")) {
                target.classList.remove("expand");
                //toggler.innerHTML = `<i class="fa fa-bars" aria-hidden="true">`;
                i.className = "fa fa-bars";
                toggler.innerHTML = i.outerHTML;
            } else {
                //toggler.innerHTML = `<i class="fa fa-times" aria-hidden="true">`;
                target.classList.add("expand");
                i.className = "fa fa-times";
                toggler.innerHTML = i.outerHTML;
            }
            //console.log(target);
        }

        function showNav() {
            if (istoggle === false) {
                if (target) {
                    expand();
                }
                istoggle = true;
            } else {
                if (target) {
                    expand();
                }
                istoggle = false;
            }
            //console.log(istoggle);
        }
        toggler.addEventListener("click", showNav);
    } dropdown();
}

(function () {
    const hexagon = document.querySelectorAll(".color__hexagon");
    const code = document.querySelectorAll(".code");
    for (let i = 0; i < hexagon.length; i++) {
        hexagon[i].style.backgroundColor = code[i].innerHTML;
    }
})();


function cardData() {
    const data = [
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/aTjJQ7VuljQS2syFS3a8EJw32SkuyUKa4wMwTDPWDVp6eqa9zjCzpKcqsxPmYf3s81vab7eLXAMOZ6MvTY6JqR1SHwFYXrZjXRFlKToeKlNzGtq3UfF54RS8zTGS0NS8TDTwZmHhsP9cFO8LIq1rRmZOr6X_l0QfhVwlqPczm0yTjQKNipMM0-LRqDDCbb0FhsoaIU4xRuzmr-SYzsSBO9utTMqqnrKnTfGye_yVP0CGZ9B4_Oe8MQFR4YjSEE4K2-GEMjeBkTFe-Y40AgnyQWM-Qwt_wyL16R08KVhRw--JD-Jzu01K-7pz52ES-E9Lfwwanb2creeTqMwOEA_y8qq6LSoqVTvh4MRxUc__R32yV3XXCRgQmTV9G6NjYfm8EovO8FLtbZLXLNP95E5QqtKM0wp7rcmy8Atqn1wOyJoOrQSpJd0qLY4oDjw03VCQKWL9v-TvLnL70hw85JgPVtygTyaZyNwXKGZLeVldx2sPDEk7U7QE2b1d2GNVqxsmHtLcYauF4cr0DwqIFgnAG4YY5YKmQQjPxoVZYnLH3MZuCSZHuLi7-xgnaaxs5NayoREPgI4GBASWZcPErBD_N-VsTHRIN41zgO0GHKzOa-s-WOk-DC9hgmuqZeCCJxzQslLpXMpGi41m0bUu0trrnOikIimCG9ujsT08ItLKg79c2Xs0shZttOe2hFEBHstYP_84GSqRgzwS2WAS3-Twlu8=s268-no?authuser=3",
        },
        {
            name: "phaeton", price: "29.99",
            img: "https://lh3.googleusercontent.com/uN3c0tZQZaCRC-ACOdpfl1qBfR6TcuD0mCTAZndSoTkOQzUYqo1MlLwaXFnyhTVzLaOPRXVVD1UQw2fPJ3GFPxkauKc_Xcuuf_6Kd7v5FW8mv4iR4S_7va4U8tTDTwUGtGUpPGgVTGZxeX93qHqJRh6UFOWoIYaI4aHLc5fTTEFEKha5ZeOrDQbmDrergYoYljU7tY2dbAAcDEIDVnG_gQF6852ZR_AfXfSk-GRMq55M1lqOH351_XiWPFI7atzuPg4B5ucvxZon6H2B4BKa9qWuqN0KKhomgERAsdjQgQfjnH1rPIjCk_zo6-lT0KijG6Z3r1ELLLgC7w54_sYgQnSmtSY9ncrzdpM2-vxAJQlyvU1Slng_EkyWRxn97H9e1jecr_DmemXTxtpfTAD6-b6sF2xOgXS4Rh_G-rXbRsHl2BAMSbp2E5d34cV5k0kiLFTtgRP40D4AFrPy6ZhurasbDYGiKPAcce_1RuepZ12pJ1KWHNETdXAL1y3aETDjPRm0YOa0Vvm_pRCppCPDFU699G6prMw3lMzN6WU5w2VNG_Bz9llWvvRRO4WMVHrU0MfiY__C8Z5iQv0lCUTKnm-PB8DsmrSff1DIcvslMWjIgaAIrOfRq7J6GT38Yi0Cck--y9M96CC7D7FscBLseQc7Y7q_r9f4eDIeongxms4VvesniVQ1XbQCZLKRpAMC1jb3qLiqtx4Q9x3MF4k5fXM=s268-no?authuser=3",
        },
        {
            name: "andis", price: "29.99",
            img: "https://lh3.googleusercontent.com/6FltnlsATIUeJ2_St2WYF0miJdJWs_MFsmIe1TgubDLRut3T0Cd6Vbv4Vjl-ZJDJfxLHNbDQCE6aaXewZk8WsyyNDANI0s5YnucUgglyyGYJtA332CtRXcYwooQ6vpSCxutE-rTBkHf4OgFm4CwWR7FcmE4BZxLNISoLEXZQEPPd7wjyCQpGXSrOCTsHQBDMWVj7jJb4VYZ27mUg3R0emmKFaZNZvJOD5HtMkTeEmP0_S79TAgXApB4HX70l3RBxf4fQB28BPbB0fb6ITphrTKqkgZy0nBGP-432m3QS69g0j-JcNoqKG_Kij_Smvf6oU6koqBsPHyL-oAJ0RZ_EF3JndBB69Iin-_I5rdcdy2F2DxSLEwSSDYr2Zv3p0B8LEjdPEsvgJdS2GDtT3C74m8Rq7kW7LlSjEefWppFTXIeZaBJgI7ZJDCmXvgVhb2uneR7xDCqO4QwRx4iK3BTAUKjIYZpOmHBSjEgxdheGoPHOFen32DgZv2lHDKv-TKpXLbY3WU0J8PhBTgiwbYrE1ykIKpL64Pwrul63g5duCCp4zBZrx9q03GgZf25bOhEnKD0FJ-hsM7cnQEi4n2v1flT4ha4Z8xEDQR8cA52csK5bGamWHzuDdECq9eHD_pZHLflDivl6qqrdQbcuNIeJJCb0Xjk1aJgRNBGkayZ9D_wc5n473CYeT5ySTWI18kUbXv5h7cWMXaBF7qVEWFEJ9W4=s270-no?authuser=3",
        },
        {
            name: "corner man", price: "29.99",
            img: "https://lh3.googleusercontent.com/_CL5dpKs0lMg6EYfYhgjz4Fym2c0hrPS4lm4506U3sXIXkfBC_sLPIvEbXtWcLnOYXV6y90_brkgUBfmR0M6qdjnT2PMOoJ3OxYAEpGp98VH31YYicmjGDsNPnDUhfWeQDYTKMOcmBr4Obx5gakZ_YZ21zdbfMzby3u0PtzeBAAOxp-bEsppmQ5p1NZhyIKkRGqsA4vcV8Jp6nr3oiw9t_TDkbp_4TEEMbAfipOEw8UO8uO6OtrO-4NRuO4DiXeJPDzqX9gaYzEVY6Jk-P3y-pjHkvMmf90_DF3kgdCufmQa8Jope7UBSR-igYilMeczwwijlZI-5bXygB6J2GbmuZlqaWCS_nSVF0QVTbWcz4OchwgyaMvUjvf1CE0CWfxsBLiCXhVkq8j_ovBfx3XWE0R0SdTNfI_afuOrmJZNiDm5jTio4jZAwi7c9zAi8nMhxn3h7OyeNTcfs01RnwOAkdQ2CUNhUPbQO4HaMT6uNpT8-5vytqRsRVQ0heIPOvN73wCd40CrNgUrBBZyh8cTO7VlY87oSf_Arj5BfwaRxBodbbf8gMLDplIDmI_25noShi-YvpRVzpIDQ6G9nZQuT_IXzfwUd8xJC0mdqw7Im7YhANcY-Jmi1y12Bt5gp38FhRmBFuEl73i6Dh5cSA3ajZC9hrmeLNQIS0M8UPC15WCdYMu1WbA_KjXEEn7Vw_MF_tGVF7GWNP06U_oGS2qjTnM=s268-no?authuser=3",
        },
        {
            name: "meridian", price: "29.99",
            img: "https://lh3.googleusercontent.com/3w5pwwOgGWa5WousYQMSjXmful4UQR7X0NNLWaPHRniyybpEq5fMntKbQGvBQrzLYIlgHDtXomYMxpSkc5bX7Jq9bSa4kJYI0i0keZg3W9jry8egvfKN-WSAl54bm_fMP9sVU2XEEGVow7S03105VyC03740N6e0jsgoDoGSZeeyWRgwlZhxfle20PYafkrwPcRsQwsFuFlYIH8KoXN2-kaoIHksw4eR-dS2UT4KWff5z2fXrknmvS_vpTWZDMlkrj5-GL4u0-QSg3NK4AaPrbPG9rENBf7k4utf2QqCyGTemkIFWLOCswsmd9T1M7fcUC9nrh2B8YgovPTU_miqCqc6EN-qWhDT9SJr1Bm8abMBOQaMELXMQI0dFDvXuZh_scAisMBE9NmKPCI-fvrVFVtRA3Gn9zCvaJvWYR8CAxTsU1G9rpzx0qDrJpDXlgsV-WpalWXxXw52d9GAEvP4ujaKooc_LPrtW6hR1CUzEq0HWVRfTrmsI1CkM2v476AXIxqWU3aPCucX0VIkaKYxNvIVxKPwwXK1wmtrPJ5zUJAd5Oh7Rcdwuba0abc00UaP5CnV6vsKsDsglCynPg3IjLckyEdVFgaT-T4QqOjbDPHh6jDOowFVtSS0DR4yP89zqi8HYoW1bosJy8v2tdlnjMqbg0MIp3_loKHoNa93Zhd_XMbAh5G316HAK9S1Wosn3r0Pw1s2pQWMY6JiFjf1VBU=w269-h270-no?authuser=3",
        },
        {
            name: "meridian", price: "29.99",
            img: "https://lh3.googleusercontent.com/67zvlM_x8bSdpd8faKo_23e0ad4FfRrj2suajkmoPGbUebGlRDDPPs8-neS5kWlhQ0yKzavLXSkaeCKP6kOXVkBVAuJzrGQ_9qVNgvpn0wMsLcTOyj3zXvmQB5cHAWybaTosJjwKxD0EdT1KzOfBtLV96kCHCQVj2BSJlQeLLIuk4f0aIutPlP5SofFogmoXgIVfRKgskdGygEKHXRqOaGmapeWur3nb8uAC863vec0mQBR8_PkNqlA_mYqIReXo1L7Z8KVaPGkJ_nedH7EBNVnvfgtSCxafdFdCz3d_FuXPgYSE55QzoULue6QvrFIBqorSbv7ghrP6QUhp_v0m-fZK466b9ATAtoe_BC35ItWTcLH4xmjvHxfLJlHGpGK7wSf80wPebs1Mb0SwfkFC4_roI5TayCU4Z1vgDpYvFBSCDDQPLiuNnjVVGfiWgvmiymX5-SqDDvO4BphvRPd2njBEntG0bUXIp1ea72KBGYJAMIBcZ73oaE_eBYNEyrXty5td-I9-Ph4491vJA4YOxUYP0WP5mM8EBTXV0wMsIZUYMU9mFz-pVCwJiTnL3uCjp6eCcWkQ00O_j1vpIeO-Vh2xwia7KI_3Ymtl9oOx1ue_gnOU7WnQIKH7efvbxw6_m-6-bIQAf70vqInZa_fa5Tff1ZbRAA6Fj7ykLPiRaU9vw0lN4gs73zjpyxaKwZiEgidiwfjatCuDDOtWKdw7mTQ=s270-no?authuser=3",
        },
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/bbSRH6CtFA6SbUt7Wm4gg1657O2owHB-Vaua65R7nQHm7vZwjqwzahwO-7LsM9pJHUer2-mxZc6r6tIqnACahy-UC18GNasq2um2aR32c8kSXJlHfMpl0Js2oPUyxaYwkOg2aRGhsi0jkKhJVyiNn2_diBWpA-nVgMpZURREpvGWq7wMTRynfY9z6rDuU2hjLNP1vIc7niBO2Tcyk-AkhLjmq9LepIcPBHXXcG9whDpYtZOFw4lHjhnC4jGF8vgqO0_82l7L4ecUph6QmbU1M1UExsY-aciVnTLjzULPhknZvv_L2tyv3qxqQNeShHc0-aqJF05TLfkY1keoXwAz8-24RuXnB-yP-oFjs9DZgcASQ0eTiVj21KFPrTGUOrSeLBN_CrnbKiMjzCGdH6b-SNuKA0wI1SJqZWADskaLBdFFSok4wFHaDgdEZmayvmd5AGGnPxUSvl_KGlq5ctPfm3z-36STGgnDfXwhlXVVwsg_X4bebBfqpAqKgbWxcgqFV_sKXnYO9X5f2lHagM5Jb-yaGIPvTSvk1tD-ld3K0akK-FYGwoFwLG1IV-_LzZ4YXNJOwi_RF2EqCMsZE0gBB52TEPC4KUZO5jbvZrACZ4nmq0AQV1T9Pv_PeKTV5ph78kGoTVljJmA33V3vE4qijHpco2LgQ8ytXq8CM4eyluzZSb8XTtmU_56QVb0gLF2lxWADirGiVjCW0XyXJuV0EOg=s268-no?authuser=3",
        },
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/_Col_JUWhPvCoyIx2njmb0ITLP8KuBfdPWbFQiRw2QyUp536n_eLRbkJjYWlq0wcKh7gAljD_Q14XKGyfDxORVpP_5X2uYkg32oFUIHGzuyaadsWkEt36uUBgC_Ms6vZUmZVEdGYyUAVJ9VSSHd3XybLu7rktcfTjyeGvhJYVTFkKwu8eQxAjGyrG4Hyf2vKpl6ZeR8p78V_NbFpylw_AE-QkHKyuScfooi4MvKXVSvflpDRjbfO0vdc42I3rRpmM3X2Bb2PNjMQffvKdj7Phigjl6w8Vj4FpM6ybnExMCLsPXgdeH6qIxWZr4AJ34brH8FC9-OnvHP4BlbG0TpSOf_wInMwOtnLS6At6W49zE0OMADLCjTN70JD6OPh_sfabUAe4FygtELnyS8wUokqC_e6iYkuCCnQLb1rVgN9gOsjvleIYnZzSe1AB4h9QwWjeV2hSiVVeplKRDkGBRx9oQeZzP37vuoYc7mmGj_EW7deYQp7BXNeiLQzJNKX4SdvlAr2GaX4FlNRsOrkDqRWiN6OY0CM8sTQ7aaIrM1mUeWP40k9neDet2ECpZmUGrUvEv-mxUxQ3EUeZw6HP291So-_RGSkeFhdLAvxFar1vc9foftzVae7sl6u-zI1oH8njc1ze4vbzaOwWpveAaWTpFTFjdeHaD9Gn9XZquYWZo7LKpHFLbi_UQPyy3CCOs2IsmN12hLv3MdrHEm0t-wFUBQ=s268-no?authuser=3",
        },
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/waI32EAsfVxCGRoCuysAlyaTAQaEdsYiy1dbhue5oI3zv06J7vmfZv_rtJupxqvzUb55c47RrCIl7LmoL8ibBuVE46oWWvSE4b3LiCl-N_MOI4ZqT-_8CKgACfaPNlUEz1f8_t2-qsYGQZc78NkCa64rLpJnkDEcQa-5M_5Mmpe8tzphs9BdQBnsNYZe2hDRxvFNCxoE8Ymh-KsH_KMbL9eRklT7nn5YB2CaNJiA44yzrbzwmuyY4OoscnenCcsZMK5AHQ2O8FkHIAS9O5R4VEUZxzk4QTfnMDm9CbZ7NL5xstX8N7DZjoQBi_VKJYva4PAlM0g5G21fGCc2RdbQOW1VIkM_ewO2JSOnBXRghGd3MAvsVfz0wZjeRzMbNH7SQzPCtmH4S6yUWr0XRooBYOCL-gSYc6w6aus3dsqv8XshuxDJt3Bb6NVa6On-sivk2FBANeQpBIT7yUMpK1cevbUSE16UiUXHCswl0DOaCbE7Pp-oETviCkFt3J1X5A8ZnJlYdIiu8DsvQfE9hJqM0SfXmrggVwShObj_R9wcYkKWiM5mWHzt4fdX_KMCtVJlVmpvfnaqYLjVZorKhI0WVMBqDIZVGUBgj6AKRVAiQf_20Z_HaWvvlZMfqAqErq3mDzpLWuvr5BUWGxviZEkonkNDea3CvNZkgjzrMBAUdvKZQcAaVlf2r1okjcte9qW6GqAiqMNaMSHB_9nHwnioq14=s268-no?authuser=3",
        },
        {
            name: "phaeton", price: "29.99",
            img: "https://lh3.googleusercontent.com/uN3c0tZQZaCRC-ACOdpfl1qBfR6TcuD0mCTAZndSoTkOQzUYqo1MlLwaXFnyhTVzLaOPRXVVD1UQw2fPJ3GFPxkauKc_Xcuuf_6Kd7v5FW8mv4iR4S_7va4U8tTDTwUGtGUpPGgVTGZxeX93qHqJRh6UFOWoIYaI4aHLc5fTTEFEKha5ZeOrDQbmDrergYoYljU7tY2dbAAcDEIDVnG_gQF6852ZR_AfXfSk-GRMq55M1lqOH351_XiWPFI7atzuPg4B5ucvxZon6H2B4BKa9qWuqN0KKhomgERAsdjQgQfjnH1rPIjCk_zo6-lT0KijG6Z3r1ELLLgC7w54_sYgQnSmtSY9ncrzdpM2-vxAJQlyvU1Slng_EkyWRxn97H9e1jecr_DmemXTxtpfTAD6-b6sF2xOgXS4Rh_G-rXbRsHl2BAMSbp2E5d34cV5k0kiLFTtgRP40D4AFrPy6ZhurasbDYGiKPAcce_1RuepZ12pJ1KWHNETdXAL1y3aETDjPRm0YOa0Vvm_pRCppCPDFU699G6prMw3lMzN6WU5w2VNG_Bz9llWvvRRO4WMVHrU0MfiY__C8Z5iQv0lCUTKnm-PB8DsmrSff1DIcvslMWjIgaAIrOfRq7J6GT38Yi0Cck--y9M96CC7D7FscBLseQc7Y7q_r9f4eDIeongxms4VvesniVQ1XbQCZLKRpAMC1jb3qLiqtx4Q9x3MF4k5fXM=s268-no?authuser=3",
        },
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/lkkDn32BpQxFjgZAavy3JRkRBAyUEmIhpEZHs9H9c9z7PXpgkgXoreLBlJ4SnJd3P7DYfE5uWEirAipaJHBfoAuvRBpHBRVIxRK_M_yL3DuxLIGB99xfibKPm7scb6NgFvIlQCHigFHThQQR8jFSyS24x8p7QcHuzckQ6KOs57kzld6TNJJ0EP6ROhJokZNKPqDbgmmctfxAzNWK3MsI4syAEOljb97vJgfEF_lgHmbIECNW85Y4pMSa9sGmFbgY9_4N8b04sBYcVx6-BdsCI0WfMc-NAo7jvSHUPfeRjbL821rSOydZRwzpFfe8f-IHioi99PkXbdkIYzHMmGOv34N9ndkvcICpxebVNiF8i-iRnU8kLXtB309hGzSdeyFzr6g0J369VWQANgwcRFkxqObIDYv3PEluEA3D-rys-w4mT82eNsdrp8kFnGxZzEsI6-Ujg5rhQTxmh6jHEx_gr_3HMP5qqb8_LQYuz9a3x1B2hzF_fNKFWhCanfxOOwYDz9HX1UoJnwbLrq1D5UgYNCpY8kn7Ery13RsDdmAC8W4PQcHEtZq16dbeabnUH6yERqjdsl8jOThn68zAo0L7j3LOY7mJ6gwCmEL0A5C0LnSPTIvGNEJATHNQYMOu5jSLZ1yVdu9vU2XJnOsspU_cbaU0iau1UUSSAK-CI0cch8kbvzOfsEcVDITBaAQFOK4ZwP3_srlO39-gznW29la8oFo=s268-no?authuser=3",
        },
        {
            name: "wahl", price: "29.99",
            img: "https://lh3.googleusercontent.com/Fu9F2H_hvqczJ_chus570tD5toS45TjS4V6mLs4-J_6q05k-CuXPi_-rknCsr-KU3B4TM4Uv0WFNnM5FHLtySptDro8zcAnOqdmr2WgC_bQP6C0zFXOgdk1ZrRUNyrP1He2whVPJobdTgwxmqjD1gg1ahLZhBmOXdajOi2ZZUuRxYLMqefsJKA6kh-Pl7H2t6BUVFyrNI36JG_RMsoCAOC2ZF7JqxdiWkipcztJYBi5ep6RWotZNPREMeX0Nbfn3es4FvlasZQu15rcDRtWrRtUkXijwZl2q49C1wm_JZdXTBsJZ1zyZt4Jf0bSTj51KJ6Wp5MMRiT-VpOkLnHLPMpy5XnVOY5e25hqoE1TZHRDfzkbEcEomtpQDaMmXWSQcl_5wIz-tGg3U_Q7YWlUepJfEPGUjVjXIHm2h6zlrdpzX0tpeH0Y7_shWSUozMTF4Di0uMW3bDtS_aYCmjNGN52G8sOswhRlruBqTE-mYPInJqMqk9AiOXZGGNrZKeFvplP3XP364oqK7DrB0XI2kwGhugGVb3D0AHqym5dotQVt1ltiLzIdvKpfq1Fzwvn-rxJpsNrYiuoZqt6isoaM9a6yr3I4yq2usuP0zp_7ZeJqKho6tIIaBN9QT7W13SKkLZQGTcdy3FsESiX2srrWycAx9cuVLR_ePcOoq_ZnIX-P3GrefElcb-PLj9bWXlvzNw_qiga0eqxeG7-ssqrnFsV0=s268-no?authuser=3",
        },
    ];
    return data;
}


{/**Append grid card */
    function createCard(obj) {
        //object distructuring
        let { img, name, price } = obj;

        const card = document.querySelector("#cardA");
        let item = card.cloneNode(true);

        //img src
        let imgBox = item.children[0];
        let imgEle = imgBox.children[0];
        imgEle.src = img;

        //name and price
        let details = item.children[1];
        let tile = details.children[0];
        let nameEle = tile.children[0];
        nameEle.innerHTML = name;

        //price
        let tile2 = details.children[1];
        let priceEle = tile2.children[1];
        priceEle.innerHTML = "#" + price;
        //console.log(price);
        card.parentElement.insertAdjacentElement("beforeend", item);
    }
    const cardInfo = cardData();

    for (let i = 1; i < cardInfo.length; i++) {
        createCard(cardInfo[i]);
    }
}

{
    function sort() {
        const pdct = document.querySelector("#product");
        const list = document.querySelector("#listView");
        const grid = document.querySelector("#gridView");

        function View() {
            if (localStorage.getItem("view") === "list") {
                pdct.className = "product__list";
            } else if (localStorage.getItem("view") === "grid") {
                pdct.className = "product__grid";
            }
        } View();

        list.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("view", "list");
            View();
        });
        grid.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("view", "grid");
            View();
        });
    } sort();
}

{
    function search() {
        const searchForm = document.querySelector("#searchForm");
        function find() {
            document.find("wahl");
        }
        searchForm.addEventListener("submit", find);
    } search();
}

{
    function popup() {
        const popup = document.querySelector("#popup");
        const times = document.querySelector(".trimming .fa-times");
        function hide() {
            popup.style.display = "none";
        }
        times.addEventListener("click", hide);
    } popup();
}

{
    function showHide(ele) {
        let element = ele;
        let isToggle = false;
        let target = document.getElementById(element.getAttribute("data-target"));
        function collapse() {
            if (isToggle === false) {
                target.style.display = "none";
                isToggle = true;
            } else {
                target.style.display = "block";
                isToggle = false;
            }
        }
        element.addEventListener("click", collapse);
    }
    const trigger = document.querySelectorAll(".menu__label");
    trigger.forEach(e => { showHide(e); });
}

