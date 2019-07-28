
var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')

var Du_lieu = {}
var Nguoi_dung = Luu_tru.Doc_Thong_tin_Nguoi_dung()
var Ho_gia_dinh = Luu_tru.Doc_Thong_tin_Ho_gia_dinh()
Ho_gia_dinh.then(Kq => {
    Du_lieu.Ho_gia_dinh = Kq
    //console.log(Du_lieu.Ho_gia_dinh[0].Thong_tin_Ho)
})
Nguoi_dung.then(Kq => {
    Du_lieu.Nguoi_dung = Kq
})

var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
    var Chuoi_Nhan = ""
    var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
    Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
    Yeu_cau.on('end', () => {
        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        var Chuoi_Kq = ""
        if (Ma_so_Xu_ly == "DANG_NHAP") {
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Doi_tuong_Kq = {}
            var Chu_ho = Du_lieu.Nguoi_dung.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase() && x.Password.toLowerCase() == Thong_tin.Password.toLowerCase())
            if (Chu_ho) {
                Doi_tuong_Kq.Ten_dang_nhap = Chu_ho.Ten_dang_nhap
                Doi_tuong_Kq.Nguoi_quan_ly = Chu_ho.Nguoi_quan_ly
                Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }
            else{
                Doi_tuong_Kq.Trang_thai="WRONG"
                Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }
        }

        //Ghi người dùng mới

        else if (Ma_so_Xu_ly == "GHI_NGUOI_DUNG") {
            var Nguoi_dung_moi = JSON.parse(Chuoi_Nhan)
            var Nguoi_dung_ton_tai = Du_lieu.Nguoi_dung.filter(x => x.Ten_dang_nhap.toLowerCase() == Nguoi_dung_moi.Ten_dang_nhap.toLowerCase())
            if (Nguoi_dung_ton_tai.length > 0) {
                Chuoi_Kq = "WRONG"
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }
            else {
                //console.log(Nguoi_dung_moi)
                var Kq = Luu_tru.Ghi_moi_Doi_tuong("Nguoi_dung", Nguoi_dung_moi)
                Kq.then(result => {
                    //console.log(result)
                    Du_lieu.Nguoi_dung.push(Nguoi_dung_moi)
                    Chuoi_Kq = "OK"
                    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                    Dap_ung.end(Chuoi_Kq);
                })
            }
        }

        //Ghi Hộ gia đình mới mới

        else if (Ma_so_Xu_ly == "GHI_HO_GIA_DINH") {
            Chuoi_Kq = "OK"
            var Ho_gia_dinh_moi = JSON.parse(Chuoi_Nhan)
            //console.log(Ho_gia_dinh_moi)

            var Kq = Luu_tru.Ghi_moi_Doi_tuong("Ho_gia_dinh", Ho_gia_dinh_moi)
            Kq.then(result => {
                //console.log(result)
                Du_lieu.Ho_gia_dinh.push(Ho_gia_dinh_moi)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }

        //Đọc thông tin hộ gia đình

        else if (Ma_so_Xu_ly == "DOC_HO_GIA_DINH") {
            var Doi_tuong_Kq = {}
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            Doi_tuong_Kq = Gia_dinh.Thong_tin_Ho
            console.log(Doi_tuong_Kq)
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.end(Chuoi_Kq);
        }

        //Đọc thông tin

        else if (Ma_so_Xu_ly == "DOC_THONG_TIN_THU") {
            var Doi_tuong_Kq = {}
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            Doi_tuong_Kq = Gia_dinh.Cac_khoan_thu
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //console.log(Doi_tuong_Kq)
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "DOC_THONG_TIN_CHI") {
            var Doi_tuong_Kq = {}
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            Doi_tuong_Kq = Gia_dinh.Cac_khoan_chi
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //console.log(Doi_tuong_Kq)
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "DOC_THONG_TIN_CHO_VAY") {
            var Doi_tuong_Kq = {}
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            Doi_tuong_Kq = Gia_dinh.Cac_khoan_cho_vay
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //console.log(Doi_tuong_Kq)
            Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "DOC_THONG_TIN_MUON") {
            var Doi_tuong_Kq = {}
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            Doi_tuong_Kq = Gia_dinh.Cac_khoan_muon_no
            Chuoi_Kq = JSON.stringify(Doi_tuong_Kq)
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //console.log(Doi_tuong_Kq)
            Dap_ung.end(Chuoi_Kq);
        }

        //Ghi thông tin 

        else if (Ma_so_Xu_ly == "GHI_THU") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_thu = Gia_dinh.Cac_khoan_thu
            var Khoan_thu_moi = Thong_tin.Khoan_thu_moi
            Khoan_thu.push(Khoan_thu_moi)
            //console.log(Khoan_thu_moi)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_thu: Khoan_thu }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_thu = Khoan_thu
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_thu)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }
        else if (Ma_so_Xu_ly == "GHI_CHI") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_chi = Gia_dinh.Cac_khoan_chi
            var Khoan_chi_moi = Thong_tin.Khoan_chi_moi
            Khoan_chi.push(Khoan_chi_moi)
            //console.log(Khoan_thu_moi)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_chi: Khoan_chi }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_chi = Khoan_chi
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_thu)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }
        else if (Ma_so_Xu_ly == "GHI_CHO_VAY") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_cho_vay = Gia_dinh.Cac_khoan_cho_vay
            var Khoan_cho_vay_moi = Thong_tin.Khoan_cho_vay_moi
            Khoan_cho_vay.push(Khoan_cho_vay_moi)
            //console.log(Khoan_thu_moi)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_cho_vay: Khoan_cho_vay }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_cho_vay = Khoan_cho_vay
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_thu)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }
        else if (Ma_so_Xu_ly == "GHI_NO") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_no = Gia_dinh.Cac_khoan_muon_no
            var Khoan_no_moi = Thong_tin.Khoan_no_moi
            Khoan_no.push(Khoan_no_moi)
            //console.log(Khoan_thu_moi)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_muon_no: Khoan_no }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_muon_no = Khoan_no
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_thu)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }

        //Sửa thông tin

        //Đổi mật khẩu

        else if (Ma_so_Xu_ly == "DOI_MAT_KHAU") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            //console.log(Thong_tin)
            var Du_lieu_Nguoi_dung = Du_lieu.Nguoi_dung.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Mat_khau_moi = Thong_tin.Mat_khau_moi
            if (Thong_tin.Mat_khau_cu != Du_lieu_Nguoi_dung.Password) {
                Chuoi_Kq = "WRONG"
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }
            else {
                var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
                var Gia_tri_Cap_nhat = {
                    $set: { Password: Mat_khau_moi }
                }
                Kq = Luu_tru.Cap_nhat_Doi_tuong("Nguoi_dung", Dieu_kien, Gia_tri_Cap_nhat)

                Kq.then(result => {
                    //console.log(result)
                    Chuoi_Kq = "OK"
                    Du_lieu_Nguoi_dung.Password = Mat_khau_moi
                    //console.log(Du_lieu_Nguoi_dung.Password)
                    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                    Dap_ung.end(Chuoi_Kq);
                })
            }
        }


        //Sửa thu

        else if (Ma_so_Xu_ly == "SUA_THU") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_thu = Gia_dinh.Cac_khoan_thu
            var Khoan_thu_moi = Thong_tin.Khoan_thu_moi

            for (i = 0; i < Khoan_thu.length; i++) {
                if (Khoan_thu[i].Ma_so == Khoan_thu_moi.Ma_so) {
                    Khoan_thu[i] = Khoan_thu_moi
                }
            }

            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_thu: Khoan_thu }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_thu = Khoan_thu

                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }

        //Sửa chi

        else if (Ma_so_Xu_ly == "SUA_CHI") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_chi = Gia_dinh.Cac_khoan_chi
            var Khoan_chi_moi = Thong_tin.Khoan_chi_moi

            for (i = 0; i < Khoan_chi.length; i++) {
                if (Khoan_chi[i].Ma_so == Khoan_chi_moi.Ma_so) {
                    Khoan_chi[i] = Khoan_chi_moi
                }
            }

            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_chi: Khoan_chi }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_chi = Khoan_chi

                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
        }
        else if (Ma_so_Xu_ly == "SUA_CHO_VAY") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_cho_vay = Gia_dinh.Cac_khoan_cho_vay
            var Khoan_cho_vay_moi = Thong_tin.Khoan_cho_vay_moi
            for (i = 0; i < Khoan_cho_vay.length; i++) {
                if (Khoan_cho_vay[i].Ma_so == Khoan_cho_vay_moi.Ma_so) {
                    Khoan_cho_vay[i] = Khoan_cho_vay_moi
                }
            }
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_cho_vay: Khoan_cho_vay }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_cho_vay = Khoan_cho_vay
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })

        }
        else if (Ma_so_Xu_ly == "SUA_NO") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_no = Gia_dinh.Cac_khoan_muon_no
            var Khoan_no_moi = Thong_tin.Khoan_no_moi
            for (i = 0; i < Khoan_no.length; i++) {
                if (Khoan_no[i].Ma_so == Khoan_no_moi.Ma_so) {
                    Khoan_no[i] = Khoan_no_moi
                }
            }
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_muon_no: Khoan_no }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {

                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_muon_no = Khoan_no
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
            // Chuoi_Kq = "OK"
            //     Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //     Dap_ung.end(Chuoi_Kq);
        }
        //Xoá thông tin

        else if (Ma_so_Xu_ly == "XOA_THU") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_thu = Gia_dinh.Cac_khoan_thu
            var Khoan_thu_moi = Thong_tin.Khoan_thu_moi
            for (i = 0; i < Khoan_thu.length; i++) {
                if (Khoan_thu[i].Ma_so === Khoan_thu_moi.Ma_so) {
                    Khoan_thu.splice(i, 1)   //Từ vị trí i xoá 1 phần tử https://love2dev.com/blog/javascript-remove-from-array/
                }
            }
            //console.log(Khoan_thu)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_thu: Khoan_thu }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_thu = Khoan_thu
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_thu)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
            // Chuoi_Kq = "OK"
            //     Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //     Dap_ung.end(Chuoi_Kq);
        }

        else if (Ma_so_Xu_ly == "XOA_CHI") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_chi = Gia_dinh.Cac_khoan_chi
            var Khoan_chi_moi = Thong_tin.Khoan_chi_moi
            for (i = 0; i < Khoan_chi.length; i++) {
                if (Khoan_chi[i].Ma_so === Khoan_chi_moi.Ma_so) {
                    Khoan_chi.splice(i, 1)   //Từ vị trí i xoá 1 phần tử https://love2dev.com/blog/javascript-remove-from-array/
                }
            }
            //console.log(Khoan_thu)
            var Dieu_kien = { "Ten_dang_nhap": Thong_tin.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_chi: Khoan_chi }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_chi = Khoan_chi
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
            // Chuoi_Kq = "OK"
            //     Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //     Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "XOA_CHO_VAY") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_cho_vay = Gia_dinh.Cac_khoan_cho_vay
            var Khoan_cho_vay_moi = Thong_tin.Khoan_cho_vay_moi
            for (i = 0; i < Khoan_cho_vay.length; i++) {
                if (Khoan_cho_vay[i].Ma_so === Khoan_cho_vay_moi.Ma_so) {
                    Khoan_cho_vay.splice(i, 1)   //Từ vị trí i xoá 1 phần tử https://love2dev.com/blog/javascript-remove-from-array/
                }
            }
            //console.log(Khoan_thu)
            var Dieu_kien = { "Ten_dang_nhap": Gia_dinh.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_cho_vay: Khoan_cho_vay }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_cho_vay = Khoan_cho_vay //Cập nhật dữ liệu cho session làm việc
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_cho_vay)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
            // Chuoi_Kq = "OK"
            //     Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //     Dap_ung.end(Chuoi_Kq);
        }
        else if (Ma_so_Xu_ly == "XOA_NO") {
            var Kq = ""
            var Thong_tin = JSON.parse(Chuoi_Nhan)
            var Gia_dinh = Du_lieu.Ho_gia_dinh.find(x => x.Ten_dang_nhap.toLowerCase() == Thong_tin.Ten_dang_nhap.toLowerCase())
            var Khoan_no = Gia_dinh.Cac_khoan_muon_no
            var Khoan_no_moi = Thong_tin.Khoan_no_moi
            for (i = 0; i < Khoan_no.length; i++) {
                if (Khoan_no[i].Ma_so === Khoan_no_moi.Ma_so) {
                    Khoan_no.splice(i, 1)   //Từ vị trí i xoá 1 phần tử https://love2dev.com/blog/javascript-remove-from-array/
                }
            }
            //console.log(Khoan_thu)
            var Dieu_kien = { "Ten_dang_nhap": Gia_dinh.Ten_dang_nhap }
            var Gia_tri_Cap_nhat = {
                $set: { Cac_khoan_muon_no: Khoan_no }
            }
            Kq = Luu_tru.Cap_nhat_Doi_tuong("Ho_gia_dinh", Dieu_kien, Gia_tri_Cap_nhat)

            Kq.then(result => {
                //console.log(result)
                Chuoi_Kq = "OK"
                Gia_dinh.Cac_khoan_muon_no = Khoan_no
                //console.log(Du_lieu.Ho_gia_dinh[0].Cac_khoan_muon_no)
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            })
            // Chuoi_Kq = "OK"
            //     Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            //     Dap_ung.end(Chuoi_Kq);
        }
        else {
            Chuoi_Kq = Luu_tru.Doc_Thong_tin_Dich_vu()
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.end(Chuoi_Kq);
        }
    })
})

Dich_vu.listen(Port,
    console.log(`Dịch vụ Dữ liệu đang thực thi tại địa chỉ: http://localhost:${Port}`)
);