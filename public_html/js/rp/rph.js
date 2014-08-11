/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 
 var lenght = 800, tall = 34, paso = 30, st;
 
 function icons(){
            container = document.getElementById('paper2');
            paper = new Raphael(container, lenght, tall);
            
            // diferentes iconos a usar.
            // icons!!
            //plug
            st = paper.set();
            st.push(
                this.iplug = paper.path("M26.33,15.836l-3.893-1.545l3.136-7.9c0.28-0.705-0.064-1.505-0.771-1.785c-0.707-0.28-1.506,0.065-1.785,0.771l-3.136,7.9l-4.88-1.937l3.135-7.9c0.281-0.706-0.064-1.506-0.77-1.786c-0.706-0.279-1.506,0.065-1.785,0.771l-3.136,7.9L8.554,8.781l-1.614,4.066l2.15,0.854l-2.537,6.391c-0.61,1.54,0.143,3.283,1.683,3.895l1.626,0.646L8.985,26.84c-0.407,1.025,0.095,2.188,1.122,2.596l0.93,0.369c1.026,0.408,2.188-0.095,2.596-1.121l0.877-2.207l1.858,0.737c1.54,0.611,3.284-0.142,3.896-1.682l2.535-6.391l1.918,0.761L26.33,15.836z"),
                //?
                this.iq = paper.path("M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M17.328,24.371h-2.707v-2.596h2.707V24.371zM17.328,19.003v0.858h-2.707v-1.057c0-3.19,3.63-3.696,3.63-5.963c0-1.034-0.924-1.826-2.134-1.826c-1.254,0-2.354,0.924-2.354,0.924l-1.541-1.915c0,0,1.519-1.584,4.137-1.584c2.487,0,4.796,1.54,4.796,4.136C21.156,16.208,17.328,16.627,17.328,19.003z"),
                // i
                this.irec = paper.path("M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M14.757,8h2.42v2.574h-2.42V8z M18.762,23.622H16.1c-1.034,0-1.475-0.44-1.475-1.496v-6.865c0-0.33-0.176-0.484-0.484-0.484h-0.88V12.4h2.662c1.035,0,1.474,0.462,1.474,1.496v6.887c0,0.309,0.176,0.484,0.484,0.484h0.88V23.622z"),
                // <
                this.iretro = paper.path("M16,30.534c8.027,0,14.534-6.507,14.534-14.534c0-8.027-6.507-14.534-14.534-14.534C7.973,1.466,1.466,7.973,1.466,16C1.466,24.027,7.973,30.534,16,30.534zM18.335,6.276l3.536,3.538l-6.187,6.187l6.187,6.187l-3.536,3.537l-9.723-9.724L18.335,6.276z"),
                //>
                this.iadvan = paper.path("M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM13.665,25.725l-3.536-3.539l6.187-6.187l-6.187-6.187l3.536-3.536l9.724,9.723L13.665,25.725z"),
                //!
                this.iprec = paper.path("M26.711,14.086L16.914,4.29c-0.778-0.778-2.051-0.778-2.829,0L4.29,14.086c-0.778,0.778-0.778,2.05,0,2.829l9.796,9.796c0.778,0.777,2.051,0.777,2.829,0l9.797-9.797C27.488,16.136,27.488,14.864,26.711,14.086zM14.702,8.981c0.22-0.238,0.501-0.357,0.844-0.357s0.624,0.118,0.844,0.353c0.221,0.235,0.33,0.531,0.33,0.885c0,0.306-0.101,1.333-0.303,3.082c-0.201,1.749-0.379,3.439-0.531,5.072H15.17c-0.135-1.633-0.301-3.323-0.5-5.072c-0.198-1.749-0.298-2.776-0.298-3.082C14.372,9.513,14.482,9.22,14.702,8.981zM16.431,21.799c-0.247,0.241-0.542,0.362-0.885,0.362s-0.638-0.121-0.885-0.362c-0.248-0.241-0.372-0.533-0.372-0.876s0.124-0.638,0.372-0.885c0.247-0.248,0.542-0.372,0.885-0.372s0.638,0.124,0.885,0.372c0.248,0.247,0.372,0.542,0.372,0.885S16.679,21.558,16.431,21.799z"),
                //Pare
                this.istop = paper.path("M20.833,2.625H10.167l-7.542,7.542v10.666l7.542,7.542h10.666l7.542-7.542V10.167L20.833,2.625zM23.76,17.145c-0.461,0.432-0.496-0.021-1.151,0.385c-0.655,0.404-1.067,0.844-1.067,0.844l-0.578,0.564c0,0-1.199,1.422-1.59,1.717c-0.392,0.291-0.572,0.166-0.572,0.166c-0.133,0.23-0.641,0.656-1.193,1.025c-0.549,0.371-0.99,1.354-0.99,1.354l-0.208,1.465c0,0-1.597,0.021-3.096-0.293c-1.499-0.314-2.699-0.982-2.699-0.982l0.655-1.451c0,0-0.58-2.225-0.636-3.926c-0.056-1.703,0.572-2.958,0.481-3.37c-0.09-0.412-0.438-1.109-0.523-1.569c-0.083-0.46-0.307-2.036-0.327-2.238c-0.021-0.202-0.28-2.232,0.614-2.204c0.891,0.027,0.648,1.388,0.725,2.246c0.077,0.857,1.13,3.249,1.297,3.123c0.167-0.125-0.056-2.398,0.006-2.838c0.063-0.439,0.182-2.315,0.293-2.747c0.112-0.433,0.105-1.778,0.935-1.66c0.83,0.118,0.606,1.332,0.488,1.813c-0.118,0.48,0.021,1.597,0.07,2.302c0.048,0.704,0.112,2.356,0.112,2.356l0.404-0.042c0,0,0.913-5,0.976-5.439c0.062-0.439,0.182-1.618,0.858-1.472c1.117,0.242,0.516,1.967,0.516,1.967l-0.486,5.509c0,0,0.166,0.224,0.492,0.021c0.33-0.202,1.312-3.25,1.459-3.927c0.146-0.676,0.084-2.678,1.145-2.428c1.059,0.252,0.453,2.755,0.124,4.353c-0.327,1.597-1.03,3.39-1.03,3.39l-0.433,1.631l0.376,0.852l0.412-0.092l0.898-0.717c0,0,0,0,0.614-0.461c0.613-0.46,1.764-0.495,2.044-0.355C23.453,16.154,24.221,16.713,23.76,17.145z"),
                //Undo
                this.iback = paper.path("M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z"),
                //sync
                this.isync = paper.path("M24.249,15.499c-0.009,4.832-3.918,8.741-8.75,8.75c-2.515,0-4.768-1.064-6.365-2.763l2.068-1.442l-7.901-3.703l0.744,8.694l2.193-1.529c2.244,2.594,5.562,4.242,9.26,4.242c6.767,0,12.249-5.482,12.249-12.249H24.249zM15.499,6.75c2.516,0,4.769,1.065,6.367,2.764l-2.068,1.443l7.901,3.701l-0.746-8.693l-2.192,1.529c-2.245-2.594-5.562-4.245-9.262-4.245C8.734,3.25,3.25,8.734,3.249,15.499H6.75C6.758,10.668,10.668,6.758,15.499,6.75z"),
                //+
                this.iadd = paper.path("M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z"),
                //-
                this.iless = paper.path("M25.979,12.896,5.979,12.896,5.979,19.562,25.979,19.562z"),
                //nuevo documento
                this.inew = paper.path("M23.024,5.673c-1.744-1.694-3.625-3.051-5.168-3.236c-0.084-0.012-0.171-0.019-0.263-0.021H7.438c-0.162,0-0.322,0.063-0.436,0.18C6.889,2.71,6.822,2.87,6.822,3.033v25.75c0,0.162,0.063,0.317,0.18,0.435c0.117,0.116,0.271,0.179,0.436,0.179h18.364c0.162,0,0.317-0.062,0.434-0.179c0.117-0.117,0.182-0.272,0.182-0.435V11.648C26.382,9.659,24.824,7.49,23.024,5.673zM22.157,6.545c0.805,0.786,1.529,1.676,2.069,2.534c-0.468-0.185-0.959-0.322-1.42-0.431c-1.015-0.228-2.008-0.32-2.625-0.357c0.003-0.133,0.004-0.283,0.004-0.446c0-0.869-0.055-2.108-0.356-3.2c-0.003-0.01-0.005-0.02-0.009-0.03C20.584,5.119,21.416,5.788,22.157,6.545zM25.184,28.164H8.052V3.646h9.542v0.002c0.416-0.025,0.775,0.386,1.05,1.326c0.25,0.895,0.313,2.062,0.312,2.871c0.002,0.593-0.027,0.991-0.027,0.991l-0.049,0.652l0.656,0.007c0.003,0,1.516,0.018,3,0.355c1.426,0.308,2.541,0.922,2.645,1.617c0.004,0.062,0.005,0.124,0.004,0.182V28.164z"),
                //mail
                this.imail = paper.path("M28.516,7.167H3.482l12.517,7.108L28.516,7.167zM16.74,17.303C16.51,17.434,16.255,17.5,16,17.5s-0.51-0.066-0.741-0.197L2.5,10.06v14.773h27V10.06L16.74,17.303z"),
                //home
                this.ihome = paper.path("M27.812,16l-3.062-3.062V5.625h-2.625v4.688L16,4.188L4.188,16L7,15.933v11.942h17.875V16H27.812zM16,26.167h-5.833v-7H16V26.167zM21.667,23.167h-3.833v-4.042h3.833V23.167z"),
                //bloqueado
                this.ilock = paper.path("M24.875,15.334v-4.876c0-4.894-3.981-8.875-8.875-8.875s-8.875,3.981-8.875,8.875v4.876H5.042v15.083h21.916V15.334H24.875zM10.625,10.458c0-2.964,2.411-5.375,5.375-5.375s5.375,2.411,5.375,5.375v4.876h-10.75V10.458zM18.272,26.956h-4.545l1.222-3.667c-0.782-0.389-1.324-1.188-1.324-2.119c0-1.312,1.063-2.375,2.375-2.375s2.375,1.062,2.375,2.375c0,0.932-0.542,1.73-1.324,2.119L18.272,26.956z"),
                //desbloqueado
                this.iunlock = paper.path("M24.875,15.334v-4.876c0-4.894-3.981-8.875-8.875-8.875s-8.875,3.981-8.875,8.875v0.375h3.5v-0.375c0-2.964,2.411-5.375,5.375-5.375s5.375,2.411,5.375,5.375v4.876H5.042v15.083h21.916V15.334H24.875zM18.272,26.956h-4.545l1.222-3.667c-0.782-0.389-1.324-1.188-1.324-2.119c0-1.312,1.063-2.375,2.375-2.375s2.375,1.062,2.375,2.375c0,0.932-0.542,1.73-1.324,2.119L18.272,26.956z"),
                //ajustes
                this.iajust = paper.path("M28.537,9.859c-0.473-0.259-1.127-0.252-1.609-0.523c-0.943-0.534-1.186-1.316-1.226-2.475c-2.059-2.215-5.138-4.176-9.424-4.114c-1.162,0.017-2.256-0.035-3.158,0.435c-0.258,0.354-0.004,0.516,0.288,0.599c-0.29,0.138-0.692,0.147-0.626,0.697c2.72-0.383,7.475,0.624,7.116,2.966c-0.08,0.521-0.735,1.076-1.179,1.563c-1.263,1.382-2.599,2.45-3.761,3.667l0.336,0.336c0.742-0.521,1.446-0.785,2.104-0.785c0.707,0,1.121,0.297,1.276,0.433c0.575-0.618,1.166-1.244,1.839-1.853c0.488-0.444,1.047-1.099,1.566-1.178l0.949-0.101c1.156,0.047,1.937,0.29,2.471,1.232c0.27,0.481,0.262,1.139,0.521,1.613c0.175,0.324,0.937,1.218,1.316,1.228c0.294,0.009,0.603-0.199,0.899-0.49l1.033-1.034c0.291-0.294,0.501-0.6,0.492-0.896C29.754,10.801,28.861,10.035,28.537,9.859zM13.021,15.353l-0.741-0.741c-3.139,2.643-6.52,5.738-9.531,8.589c-0.473,0.443-1.452,1.021-1.506,1.539c-0.083,0.781,0.95,1.465,1.506,2c0.556,0.533,1.212,1.602,1.994,1.51c0.509-0.043,1.095-1.029,1.544-1.502c2.255-2.374,4.664-4.976,6.883-7.509c-0.312-0.371-0.498-0.596-0.498-0.596C12.535,18.451,11.779,17.272,13.021,15.353zM20.64,15.643c-0.366-0.318-1.466,0.143-1.777-0.122c-0.311-0.266,0.171-1.259-0.061-1.455c-0.482-0.406-0.77-0.646-0.77-0.646s-0.862-0.829-2.812,0.928L7.44,6.569C7.045,6.173,7.203,4.746,7.203,4.746L3.517,2.646L2.623,3.541l2.1,3.686c0,0,1.428-0.158,1.824,0.237l7.792,7.793c-1.548,1.831-0.895,2.752-0.895,2.752s0.238,0.288,0.646,0.771c0.196,0.23,1.188-0.249,1.455,0.061c0.264,0.312-0.196,1.41,0.12,1.777c2.666,3.064,6.926,7.736,8.125,7.736c0.892,0,2.021-0.724,2.948-1.64c0.925-0.917,1.639-2.055,1.639-2.947C28.377,22.567,23.704,18.309,20.64,15.643z"),
                //dimensiones
                this.idim = paper.path("M6.63,21.796l-5.122,5.121h25.743V1.175L6.63,21.796zM18.702,10.48c0.186-0.183,0.48-0.183,0.664,0l1.16,1.159c0.184,0.183,0.186,0.48,0.002,0.663c-0.092,0.091-0.213,0.137-0.332,0.137c-0.121,0-0.24-0.046-0.33-0.137l-1.164-1.159C18.519,10.96,18.519,10.664,18.702,10.48zM17.101,12.084c0.184-0.183,0.48-0.183,0.662,0l2.156,2.154c0.184,0.183,0.184,0.48,0.002,0.661c-0.092,0.092-0.213,0.139-0.334,0.139s-0.24-0.046-0.33-0.137l-2.156-2.154C16.917,12.564,16.917,12.267,17.101,12.084zM15.497,13.685c0.184-0.183,0.48-0.183,0.664,0l1.16,1.161c0.184,0.183,0.182,0.48-0.002,0.663c-0.092,0.092-0.211,0.138-0.33,0.138c-0.121,0-0.24-0.046-0.332-0.138l-1.16-1.16C15.314,14.166,15.314,13.868,15.497,13.685zM13.896,15.288c0.184-0.183,0.48-0.181,0.664,0.002l1.158,1.159c0.183,0.184,0.183,0.48,0,0.663c-0.092,0.092-0.212,0.138-0.332,0.138c-0.119,0-0.24-0.046-0.332-0.138l-1.158-1.161C13.713,15.767,13.713,15.471,13.896,15.288zM12.293,16.892c0.183-0.184,0.479-0.184,0.663,0l2.154,2.153c0.184,0.184,0.184,0.481,0,0.665c-0.092,0.092-0.211,0.138-0.33,0.138c-0.121,0-0.242-0.046-0.334-0.138l-2.153-2.155C12.11,17.371,12.11,17.075,12.293,16.892zM10.302,24.515c-0.091,0.093-0.212,0.139-0.332,0.139c-0.119,0-0.238-0.045-0.33-0.137l-2.154-2.153c-0.184-0.183-0.184-0.479,0-0.663s0.479-0.184,0.662,0l2.154,2.153C10.485,24.036,10.485,24.332,10.302,24.515zM10.912,21.918c-0.093,0.093-0.214,0.139-0.333,0.139c-0.12,0-0.24-0.045-0.33-0.137l-1.162-1.161c-0.184-0.183-0.184-0.479,0-0.66c0.184-0.185,0.48-0.187,0.664-0.003l1.161,1.162C11.095,21.438,11.095,21.735,10.912,21.918zM12.513,20.316c-0.092,0.092-0.211,0.138-0.332,0.138c-0.119,0-0.239-0.046-0.331-0.138l-1.159-1.16c-0.184-0.184-0.184-0.48,0-0.664s0.48-0.182,0.663,0.002l1.159,1.161C12.696,19.838,12.696,20.135,12.513,20.316zM22.25,21.917h-8.67l8.67-8.67V21.917zM22.13,10.7c-0.09,0.092-0.211,0.138-0.33,0.138c-0.121,0-0.242-0.046-0.334-0.138l-1.16-1.159c-0.184-0.183-0.184-0.479,0-0.663c0.182-0.183,0.479-0.183,0.662,0l1.16,1.159C22.312,10.221,22.313,10.517,22.13,10.7zM24.726,10.092c-0.092,0.092-0.213,0.137-0.332,0.137s-0.24-0.045-0.33-0.137l-2.154-2.154c-0.184-0.183-0.184-0.481,0-0.664s0.482-0.181,0.664,0.002l2.154,2.154C24.911,9.613,24.909,9.91,24.726,10.092z"),
                //x
                this.idimx = paper.path("M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z"),
                //bien
                this.iok = paper.path("M2.379,14.729 5.208,11.899 12.958,19.648 25.877,6.733 28.707,9.561 12.958,25.308z"),
                //save
                this.isave = paper.path("M28.625,26.75h-26.5V8.375h1.124c1.751,0,0.748-3.125,3-3.125c3.215,0,1.912,0,5.126,0c2.251,0,1.251,3.125,3.001,3.125h14.25V26.75z"),
                //download
                this.idownl = paper.path("M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM16,28.792c-1.549,0-2.806-1.256-2.806-2.806s1.256-2.806,2.806-2.806c1.55,0,2.806,1.256,2.806,2.806S17.55,28.792,16,28.792zM16,21.087l-7.858-6.562h3.469V5.747h8.779v8.778h3.468L16,21.087z"),
                //espejo
                this.imirror_v = paper.path("M15.57,20.273h0.854v-1.705H15.57V20.273zM15.57,23.686h0.854V21.98H15.57V23.686zM15.57,27.096h0.854v-1.705H15.57V27.096zM15.57,29.689h0.854V28.8H15.57V29.689zM15.57,16.865h0.854V15.16H15.57V16.865zM15.57,3.225h0.854V1.52H15.57V3.225zM15.57,6.635h0.854V4.93H15.57V6.635zM15.57,10.045h0.854V8.34H15.57V10.045zM15.57,13.455h0.854V11.75H15.57V13.455zM18.41,3.327V25.46h12.015L18.41,3.327zM19.264,6.68l9.729,17.93h-9.729V6.68zM13.535,25.46V3.327L1.521,25.46H13.535z"),
                //espejo horizontal
                this.imirror_h = paper.path("M20.643,16.008v-0.854h-1.705v0.854H20.643zM24.053,16.008v-0.854h-1.705v0.854H24.053zM27.463,16.008v-0.854h-1.705v0.854H27.463zM30.059,16.008v-0.854h-0.891v0.854H30.059zM17.232,16.008v-0.854h-1.709v0.854H17.232zM3.593,16.008v-0.854H1.888v0.854H3.593zM7.003,16.008v-0.854H5.298v0.854H7.003zM10.414,16.008v-0.854H8.709v0.854H10.414zM13.824,16.008v-0.854h-1.705v0.854H13.824zM3.694,13.167h22.134V1.152L3.694,13.167zM7.048,12.314l17.929-9.729v9.729H7.048zM25.828,18.042H3.694l22.134,12.015V18.042z"),
                //redimensionar
                this.iredimension = paper.path("M1.999,2.332v26.499H28.5V2.332H1.999zM26.499,26.832H4V12.5h8.167V4.332h14.332V26.832zM15.631,17.649l5.468,5.469l-1.208,1.206l5.482,1.469l-1.47-5.481l-1.195,1.195l-5.467-5.466l1.209-1.208l-5.482-1.469l1.468,5.48L15.631,17.649z"),
                //wizard
                this.iwizar = paper.path("M23.043,4.649l-0.404-2.312l-1.59,1.727l-2.323-0.33l1.151,2.045l-1.032,2.108l2.302-0.463l1.686,1.633l0.271-2.332l2.074-1.099L23.043,4.649zM26.217,18.198l-0.182-1.25l-0.882,0.905l-1.245-0.214l0.588,1.118l-0.588,1.118l1.245-0.214l0.882,0.905l0.182-1.25l1.133-0.56L26.217,18.198zM4.92,7.672L5.868,7.3l0.844,0.569L6.65,6.853l0.802-0.627L6.467,5.97L6.118,5.013L5.571,5.872L4.553,5.908l0.647,0.786L4.92,7.672zM10.439,10.505l1.021-1.096l1.481,0.219l-0.727-1.31l0.667-1.341l-1.47,0.287l-1.069-1.048L10.16,7.703L8.832,8.396l1.358,0.632L10.439,10.505zM17.234,12.721c-0.588-0.368-1.172-0.618-1.692-0.729c-0.492-0.089-1.039-0.149-1.425,0.374L2.562,30.788h6.68l9.669-15.416c0.303-0.576,0.012-1.041-0.283-1.447C18.303,13.508,17.822,13.09,17.234,12.721zM13.613,21.936c-0.254-0.396-0.74-0.857-1.373-1.254c-0.632-0.396-1.258-0.634-1.726-0.69l4.421-7.052c0.064-0.013,0.262-0.021,0.543,0.066c0.346,0.092,0.785,0.285,1.225,0.562c0.504,0.313,0.908,0.677,1.133,0.97c0.113,0.145,0.178,0.271,0.195,0.335c0.002,0.006,0.004,0.011,0.004,0.015L13.613,21.936z"),
                //codigo g
                this.icreateG = paper.path("M26.834,14.693c1.816-2.088,2.181-4.938,1.193-7.334l-3.646,4.252l-3.594-0.699L19.596,7.45l3.637-4.242c-2.502-0.63-5.258,0.13-7.066,2.21c-1.907,2.193-2.219,5.229-1.039,7.693L5.624,24.04c-1.011,1.162-0.888,2.924,0.274,3.935c1.162,1.01,2.924,0.888,3.935-0.274l9.493-10.918C21.939,17.625,24.918,16.896,26.834,14.693z"),
                //pintar
                this.ipaint = paper.path("M8.125,29.178l1.311-1.5l1.315,1.5l1.311-1.5l1.311,1.5l1.315-1.5l1.311,1.5l1.312-1.5l1.314,1.5l1.312-1.5l1.312,1.5l1.314-1.5l1.312,1.5v-8.521H8.125V29.178zM23.375,17.156c-0.354,0-5.833-0.166-5.833-2.917s0.75-8.834,0.75-8.834S18.542,2.822,16,2.822s-2.292,2.583-2.292,2.583s0.75,6.083,0.75,8.834s-5.479,2.917-5.833,2.917c-0.5,0-0.5,1.166-0.5,1.166v1.271h15.75v-1.271C23.875,18.322,23.875,17.156,23.375,17.156zM16,8.031c-0.621,0-1.125-2.191-1.125-2.812S15.379,4.094,16,4.094s1.125,0.504,1.125,1.125S16.621,8.031,16,8.031z"),
                //proyectos
                this.iproyect = paper.path("M26.679,7.858c-0.176-0.138-0.404-0.17-0.606-0.083l-9.66,4.183c-0.42,0.183-0.946,0.271-1.486,0.271c-0.753,0.002-1.532-0.173-2.075-0.412c-0.194-0.083-0.356-0.176-0.471-0.259c0.042-0.021,0.09-0.042,0.146-0.064l8.786-3.804l1.31,0.561V6.612c0-0.244-0.106-0.475-0.283-0.612c-0.176-0.138-0.406-0.17-0.605-0.083l-9.66,4.183c-0.298,0.121-0.554,0.268-0.771,0.483c-0.213,0.208-0.397,0.552-0.394,0.934c0,0.01,0.003,0.027,0.003,0.027v14.73c0,0.006-0.002,0.012-0.002,0.019c0,0.005,0.002,0.007,0.002,0.012v0.015h0.002c0.021,0.515,0.28,0.843,0.528,1.075c0.781,0.688,2.091,1.073,3.484,1.093c0.66,0,1.33-0.1,1.951-0.366l9.662-4.184c0.255-0.109,0.422-0.383,0.422-0.692V8.471C26.961,8.227,26.855,7.996,26.679,7.858zM20.553,5.058c-0.017-0.221-0.108-0.429-0.271-0.556c-0.176-0.138-0.404-0.17-0.606-0.083l-9.66,4.183C9.596,8.784,9.069,8.873,8.53,8.873C7.777,8.874,6.998,8.699,6.455,8.46C6.262,8.378,6.099,8.285,5.984,8.202C6.026,8.181,6.075,8.16,6.13,8.138l8.787-3.804l1.309,0.561V3.256c0-0.244-0.106-0.475-0.283-0.612c-0.176-0.138-0.407-0.17-0.606-0.083l-9.66,4.183C5.379,6.864,5.124,7.011,4.907,7.227C4.693,7.435,4.51,7.779,4.513,8.161c0,0.011,0.003,0.027,0.003,0.027v14.73c0,0.006-0.001,0.013-0.001,0.019c0,0.005,0.001,0.007,0.001,0.012v0.016h0.002c0.021,0.515,0.28,0.843,0.528,1.075c0.781,0.688,2.091,1.072,3.485,1.092c0.376,0,0.754-0.045,1.126-0.122V11.544c-0.01-0.7,0.27-1.372,0.762-1.856c0.319-0.315,0.708-0.564,1.19-0.756L20.553,5.058z"),
                //ayuda
                this.ihelp = paper.path("M12.75,25.498h5.5v-5.164h-5.5V25.498zM15.5,28.166c1.894,0,2.483-1.027,2.667-1.666h-5.334C13.017,27.139,13.606,28.166,15.5,28.166zM15.5,2.833c-3.866,0-7,3.134-7,7c0,3.859,3.945,4.937,4.223,9.499h1.271c-0.009-0.025-0.024-0.049-0.029-0.078L11.965,8.256c-0.043-0.245,0.099-0.485,0.335-0.563c0.237-0.078,0.494,0.026,0.605,0.25l0.553,1.106l0.553-1.106c0.084-0.17,0.257-0.277,0.446-0.277c0.189,0,0.362,0.107,0.446,0.277l0.553,1.106l0.553-1.106c0.084-0.17,0.257-0.277,0.448-0.277c0.189,0,0.36,0.107,0.446,0.277l0.554,1.106l0.553-1.106c0.111-0.224,0.368-0.329,0.604-0.25s0.377,0.318,0.333,0.563l-1.999,10.998c-0.005,0.029-0.02,0.053-0.029,0.078h1.356c0.278-4.562,4.224-5.639,4.224-9.499C22.5,5.968,19.366,2.833,15.5,2.833zM17.458,10.666c-0.191,0-0.364-0.107-0.446-0.275l-0.554-1.106l-0.553,1.106c-0.086,0.168-0.257,0.275-0.446,0.275c-0.191,0-0.364-0.107-0.449-0.275l-0.553-1.106l-0.553,1.106c-0.084,0.168-0.257,0.275-0.446,0.275c-0.012,0-0.025,0-0.037-0.001l1.454,8.001h1.167l1.454-8.001C17.482,10.666,17.47,10.666,17.458,10.666z"),
                ////off
                this.ioff = paper.path("M25.542,8.354c-1.47-1.766-2.896-2.617-3.025-2.695c-0.954-0.565-2.181-0.241-2.739,0.724c-0.556,0.961-0.24,2.194,0.705,2.763c0,0,0.001,0,0.002,0.001c0.001,0,0.002,0.001,0.003,0.002c0.001,0,0.003,0.001,0.004,0.001c0.102,0.062,1.124,0.729,2.08,1.925c1.003,1.261,1.933,3.017,1.937,5.438c-0.001,2.519-1.005,4.783-2.64,6.438c-1.637,1.652-3.877,2.668-6.368,2.669c-2.491-0.001-4.731-1.017-6.369-2.669c-1.635-1.654-2.639-3.919-2.64-6.438c0.005-2.499,0.995-4.292,2.035-5.558c0.517-0.625,1.043-1.098,1.425-1.401c0.191-0.152,0.346-0.263,0.445-0.329c0.049-0.034,0.085-0.058,0.104-0.069c0.005-0.004,0.009-0.006,0.012-0.008s0.004-0.002,0.004-0.002l0,0c0.946-0.567,1.262-1.802,0.705-2.763c-0.559-0.965-1.785-1.288-2.739-0.724c-0.128,0.079-1.555,0.93-3.024,2.696c-1.462,1.751-2.974,4.511-2.97,8.157C2.49,23.775,8.315,29.664,15.5,29.667c7.186-0.003,13.01-5.892,13.012-13.155C28.516,12.864,27.005,10.105,25.542,8.354zM15.5,17.523c1.105,0,2.002-0.907,2.002-2.023h-0.001V3.357c0-1.118-0.896-2.024-2.001-2.024s-2.002,0.906-2.002,2.024V15.5C13.498,16.616,14.395,17.523,15.5,17.523z"),
                //lapiz
                this.ilapiz = paper.path("M25.31,2.872l-3.384-2.127c-0.854-0.536-1.979-0.278-2.517,0.576l-1.334,2.123l6.474,4.066l1.335-2.122C26.42,4.533,26.164,3.407,25.31,2.872zM6.555,21.786l6.474,4.066L23.581,9.054l-6.477-4.067L6.555,21.786zM5.566,26.952l-0.143,3.819l3.379-1.787l3.14-1.658l-6.246-3.925L5.566,26.952z"),
                //hand
                this.ihand = paper.path("M14.296,27.885v-2.013c0,0-0.402-1.408-1.073-2.013c-0.671-0.604-1.274-1.274-1.409-1.61c0,0-0.268,0.135-0.737-0.335s-1.812-2.616-1.812-2.616l-0.671-0.872c0,0-0.47-0.671-1.275-1.342c-0.805-0.672-0.938-0.067-1.476-0.738s0.604-1.275,1.006-1.409c0.403-0.134,1.946,0.134,2.684,0.872c0.738,0.738,0.738,0.738,0.738,0.738l1.073,1.141l0.537,0.201l0.671-1.073l-0.269-2.281c0,0-0.604-2.55-0.737-4.764c-0.135-2.214-0.47-5.703,1.006-5.837s1.007,2.55,1.073,3.489c0.067,0.938,0.806,5.232,1.208,5.568c0.402,0.335,0.671,0.066,0.671,0.066l0.402-7.514c0,0-0.479-2.438,1.073-2.549c0.939-0.067,0.872,1.543,0.872,2.147c0,0.604,0.269,7.514,0.269,7.514l0.537,0.135c0,0,0.402-2.214,0.604-3.153s0.604-2.416,0.537-3.087c-0.067-0.671-0.135-2.348,1.006-2.348s0.872,1.812,0.939,2.415s-0.134,3.153-0.134,3.757c0,0.604-0.738,3.623-0.537,3.824s2.08-2.817,2.349-3.958c0.268-1.141,0.201-3.02,1.408-2.885c1.208,0.134,0.47,2.817,0.402,3.086c-0.066,0.269-0.671,2.349-0.872,2.952s-0.805,1.476-1.006,2.013s0.402,2.349,0,4.629c-0.402,2.281-1.61,5.166-1.61,5.166l0.604,2.08c0,0-1.744,0.671-3.824,0.805C16.443,28.221,14.296,27.885,14.296,27.885z"),
                //zoom -
                this.izoomless = paper.path("M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM8.854,11.884v4.001l9.665-0.001v-3.999L8.854,11.884z"),
                //zoom +
                this.izoompluss = paper.path("M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM15.687,9.051h-4v2.833H8.854v4.001h2.833v2.833h4v-2.834h2.832v-3.999h-2.833V9.051z"),
                //Rectangle
                this.irectangle = paper.path("M5.5,5.5h20v20h-20z"),
                //label
                this.ilabel = paper.path("M27.87,7.863L23.024,4.82l-7.889,12.566l4.842,3.04L27.87,7.863zM14.395,21.25l-0.107,2.855l2.527-1.337l2.349-1.24l-4.672-2.936L14.395,21.25zM29.163,3.239l-2.532-1.591c-0.638-0.401-1.479-0.208-1.882,0.43l-0.998,1.588l4.842,3.042l0.999-1.586C29.992,4.481,29.802,3.639,29.163,3.239zM25.198,27.062c0,0.275-0.225,0.5-0.5,0.5h-19c-0.276,0-0.5-0.225-0.5-0.5v-19c0-0.276,0.224-0.5,0.5-0.5h13.244l1.884-3H5.698c-1.93,0-3.5,1.57-3.5,3.5v19c0,1.93,1.57,3.5,3.5,3.5h19c1.93,0,3.5-1.57,3.5-3.5V11.097l-3,4.776V27.062z"),
                //dot
                this.idot = paper.circle(17,17,10),
                /* Cualquier icono que se incorpore debe ponerse aqui y finalizado con ","
                 * 
                 * @type @exp;paper@call;path
                 */
                //mover
                this.imove = paper.path("M25.545,23.328,17.918,15.623,25.534,8.007,27.391,9.864,29.649,1.436,21.222,3.694,23.058,5.53,15.455,13.134,7.942,5.543,9.809,3.696,1.393,1.394,3.608,9.833,5.456,8.005,12.98,15.608,5.465,23.123,3.609,21.268,1.351,29.695,9.779,27.438,7.941,25.6,15.443,18.098,23.057,25.791,21.19,27.638,29.606,29.939,27.393,21.5z")
                
                
                //
                //paper.path("M5.5,5.5h20v20h-20z");
                
           );
           attrIcons(st);
            
 }     
 function attrIcons(st){
     this.st = st;
     var col = 'black';
     st.hide();
     st.attr({fill: col, stroke: "none"});
     st.mouseout(function(){
         st.attr({fill: col, stroke: "none"});
     });
 }
 function loadIcons(gd){
        this.gd = gd;
        var colors = 'blue';
        var iconsArray = new Array();
        icons();
        var j = 0;
        for (i = 1; i <= 800; i = i + paso){
            iconsArray[j] = i ;
            j++;
        } 
        this.ilapiz.translate(iconsArray[0],0).show();
        this.irectangle.translate(iconsArray[1],0).show();
        this.idot.translate(iconsArray[2],0).show();
        this.isync.translate(iconsArray[3],0).show();
        this.ilabel.translate(iconsArray[4],0).show();
        this.idim.translate(iconsArray[5],0).show();
        
        this.iback.translate(iconsArray[7],0).show();
        this.iretro.translate(iconsArray[8],0).show();
        this.iadvan.translate(iconsArray[9],0).show();
        this.iwizar.translate(iconsArray[10],0).show();
        
        
        
        this.iadd.translate(iconsArray[12],0).show();
        this.iless.translate(iconsArray[13],0).show();
        this.isave.translate(iconsArray[14],0).show();
        this.inew.translate(iconsArray[15],0).show();
        this.icreateG.translate(iconsArray[16],0).show(); 
        
        this.imove.translate(iconsArray[18],0).show();
        this.ihand.translate(iconsArray[19],0).show();
        this.izoomless.translate(iconsArray[20],0).show();
        this.izoompluss.translate(iconsArray[21],0).show();
           
        this.idimx.translate(iconsArray[24],0).show();
        this.iok.translate(iconsArray[25],0).show();
          
                    /*	             
                    gd.setMode(gd.MODES.ADDARC);
                    //iplug.glow();
     
                    .mousemove(function(){
                             ilapiz.attr({fill: "blue", stroke: "none"});
                         }).click(function () {
                            gd.zoomIn();
            
          });
     
                    */
          ilapiz.mousemove(function(){
              ilapiz.attr({fill: colors, stroke: "none"});
          }).click(function () {
            gd.setMode(gd.MODES.ADDLINE);
            
          });
          iback.mousemove(function(){
              iback.attr({fill: colors, stroke: "none"});
          }).click(function () {
                        
          });
          inew.mousemove(function(){
              inew.attr({fill: colors, stroke: "none"});
          }).click(function () {
              window.open('http://localhost:8383/WebCad5/index.html','','width=600\n\
                ,height=400,left=50,top=50,toolbar=yes');
          });
          iretro.mousemove(function(){
              iretro.attr({fill: colors, stroke: "none"});
          }).click(function () {
                // crea arcos prueba
                 gd.setMode(gd.MODES.ADDARC);       
          });
          iadvan.mousemove(function(){
              iadvan.attr({fill: colors, stroke: "none"});
          }).click(function () {
              //alert("shape");
                //gd.setMode(gd.MODES.ADDSHAPE);  
                //gd.setModeShape(getShapeSerbatoioOrizzontale);
          });
          iwizar.mousemove(function(){
              iwizar.attr({fill: colors, stroke: "none"});
          }).click(function () {
            gd.setMode(gd.MODES.EDIT);         
          });
          idim.mousemove(function(){
              idim.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.ADDMEASURE);
            
          });
          idimx.mousemove(function(){
              idimx.attr({fill: colors, stroke: "none"});
          }).click(function () {
            
          });
          iok.mousemove(function(){
              iok.attr({fill: colors, stroke: "none"});
          }).click(function () {
                gd.getJSON();
                console.log(gd.getJSON());
                  /*
                    var x = document.createElement("TEXTAREA");
                    
                    var t = document.createTextNode("At w3schools.com you will learn how to make a website.");
                    x.appendChild(t);
                    
                    document.body.appendChild(x);
                    
                   document.getElementById("codex").value="Codigo";
                   */
                  // alert('ok');
                           
          });
          icreateG.mousemove(function(){
              icreateG.attr({fill: colors, stroke: "none"});
          }).click(function () {
               arranqueTXT();          
          });
          iadd.mousemove(function(){
              iadd.attr({fill: colors, stroke: "none"});
          }).click(function () {
                         
          });
          iless.mousemove(function(){
              iless.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.DELETE);
          });
          isave.mousemove(function(){
              isave.attr({fill: colors, stroke: "none"});
          }).click(function () {
                         
          });
          imove.mousemove(function(){
              imove.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.MOVE);
            
          });
          ihand.mousemove(function(){
              ihand.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.NAVIGATE);
          });
          izoomless.mousemove(function(){
              izoomless.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.zoomOut();  
          });
          izoompluss.mousemove(function(){
              izoompluss.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.zoomIn();
          });
          irectangle.mousemove(function(){
              irectangle.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.ADDRECTANGLE);            
          });
          isync.mousemove(function(){
              isync.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.ADDCIRCLE);
             //gd.setMode(gd.MODES.ADDARC);
          });
          ilabel.mousemove(function(){
              ilabel.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.ADDLABEL);   
          });
          idot.mousemove(function(){
              idot.attr({fill: colors, stroke: "none"});
          }).click(function () {
             gd.setMode(gd.MODES.ADDPOINT);
          });
 }
 
