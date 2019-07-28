var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Media = "http://localhost:1001"
//Sau mỗi thao tác cần cập nhật dữ liệu lại để đồng bộ hoá dữ liệu
//Đăng nhạp hệ thống
function Dang_nhap_He_thong(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DANG_NHAP`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Thong_tin = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Thong_tin)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//Xử lý đăng nhập
function XL_Dang_nhap(Thong_tin) {
    var Kq = Dang_nhap_He_thong(Thong_tin)
    if ("Ten_dang_nhap" in Kq) {
        sessionStorage.setItem("Nguoi_dung", JSON.stringify(Kq))
        window.location = 'MH_Chinh.html'
    } else {
        Th_Thong_bao.innerHTML = "Thông tin đăng nhập không hợp lệ ..."
    }
}
//Đọc thông tin hộ gia đình
function Doc_Thong_tin_Ho_gia_dinh(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_HO_GIA_DINH`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(JSON.stringify(Thong_tin))
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//Đọc thông tin thu

function Doc_Thong_tin_Thu(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_THONG_TIN_THU`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(JSON.stringify(Thong_tin))
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//Đọc thông tin chi

function Doc_Thong_tin_Chi(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_THONG_TIN_CHI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(JSON.stringify(Thong_tin))
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//Đọc thông tin cho vay

function Doc_Thong_tin_Cho_vay(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_THONG_TIN_CHO_VAY`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(JSON.stringify(Thong_tin))
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//Đọc thông tin mượn nợ

function Doc_Thong_tin_Muon_no() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOC_THONG_TIN_MUON`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(JSON.stringify(Thong_tin))
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}


//Ghi khoản thu mới

function Ghi_Khoan_thu_moi(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_THU`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Ghi khoản chi mới

function Ghi_Khoan_chi_moi(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_CHI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}


//Sửa khoản thu

function Sua_Khoan_thu(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=SUA_THU`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Sửa khoản chi

function Sua_Khoan_chi(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=SUA_CHI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Xoá khoản thu

function Xoa_Khoan_thu(Khoan_thu_xoa) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=XOA_THU`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Khoan_thu_xoa) //Dữ liệu là object -> string
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Đổi mật khẩu

function Doi_mat_khau(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=DOI_MAT_KHAU`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Xoá khoản chi

function Xoa_Khoan_chi(Khoan_chi_xoa) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=XOA_CHI`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Khoan_chi_xoa) //Dữ liệu là object -> string
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Xoá khoản cho vay

function Xoa_Khoan_Cho_vay(Khoan_Cho_vay_xoa) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=XOA_CHO_VAY`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Khoan_Cho_vay_xoa) //Dữ liệu là object -> string
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Xoá khoản nợ

function Xoa_Khoan_no(Khoan_no_xoa) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=XOA_NO`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Khoan_no_xoa) //Dữ liệu là object -> string
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Ghi khoản cho vay mới

function Ghi_Khoan_Cho_vay_moi(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_CHO_VAY`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Ghi khoản nợ mới

function Ghi_Khoan_no_moi(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_NO`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}


//Sửa khoản cho vay

function Sua_Khoan_Cho_vay(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=SUA_CHO_VAY`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Sửa khoản nợ

function Sua_Khoan_no(Thong_tin) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=SUA_NO`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Đăng ký người dùng mới

function Dang_ky_moi() {
    var Ten_dang_nhap = Th_Ten_moi.value
    var Nguoi_quan_ly = Th_Quan_ly_moi.value
    var Mat_khau_1 = Th_Mat_khau_1.value
    var Mat_khau_2 = Th_Mat_khau_2.value

    if (Ten_dang_nhap == "" || Nguoi_quan_ly == "" || Mat_khau_1 == "" || Mat_khau_2 == "") {
        Th_Tb.innerHTML = "Bạn cần nhập đủ thông tin !!"
    }
    else if (Mat_khau_1 != Mat_khau_2) {
        Th_Tb.innerHTML = "Mật khẩu không khớp !!"
    }
    else {
        var Nguoi_dung_moi = {}
        Nguoi_dung_moi.Ten_dang_nhap = Ten_dang_nhap
        Nguoi_dung_moi.Password = Mat_khau_1
        Nguoi_dung_moi.Nguoi_quan_ly = Nguoi_quan_ly
        var Kq_Nguoi_dung = Ghi_Nguoi_dung_moi(Nguoi_dung_moi)

        if (Kq_Nguoi_dung == "OK") {
            var Ho_gia_dinh_moi = {}
            var Thong_tin_Ho = {}
            Thong_tin_Ho.So_thanh_vien = "1"
            Thong_tin_Ho.Cac_thanh_vien = [{ Ho_ten: Nguoi_quan_ly }]
            Ho_gia_dinh_moi.Ten_dang_nhap = Ten_dang_nhap
            Ho_gia_dinh_moi.Thong_tin_Ho = Thong_tin_Ho
            Ho_gia_dinh_moi.Cac_khoan_thu = []
            Ho_gia_dinh_moi.Cac_khoan_chi = []
            Ho_gia_dinh_moi.Cac_khoan_cho_vay = []
            Ho_gia_dinh_moi.Cac_khoan_muon_no = []

            var Kq_Ho_gia_dinh = Ghi_Ho_gia_dinh_moi(Ho_gia_dinh_moi)
            if (Kq_Ho_gia_dinh == "OK") {
                Th_Tb.innerHTML = "Bạn đăng ký thành công !"
            }
            else {
                Th_Tb.innerHTML = "Bạn đăng ký không thành công !"
            }
        }
        else if (Kq_Nguoi_dung == "WRONG") {
            Th_Tb.innerHTML = "Tên đăng nhập đã tồn tại !"
        }
        else {
            Th_Tb.innerHTML = "Bạn đăng ký không thành công !"
        }
    }
}

//Ghi người dùng mới

function Ghi_Nguoi_dung_moi(Nguoi_dung_moi) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_NGUOI_DUNG`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Nguoi_dung_moi)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//Ghi hộ gia đình mới

function Ghi_Ho_gia_dinh_moi(Ho_gia_dinh_moi) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=GHI_HO_GIA_DINH`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Ho_gia_dinh_moi)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
//Kiểm tra quý

function Kiem_tra_quy(Thang) {
    var Quy = ""
    if (Number(Thang) <= 3) {
        Quy = "1"
    }
    else if (Number(Thang) <= 6) {
        Quy = "2"
    }
    else if (Number(Thang) <= 9) {
        Quy = "3"
    }
    else {
        Quy = "4"
    }
    return Quy
}

//Kiểm tra dữ liệu lúc đầu để xuất

function Kiem_tra_Xuat(Danh_sach) {
    var Danh_sach_Loc = []
    var Nam_Loc = Th_nam.value
    var Thang_Loc = Th_thang.value

    if (Thang_Loc == "0") {
        Thang_Loc = Thang_hien_hanh
    }
    if (Nam_Loc == "0") {
        Nam_Loc = Nam_hien_hanh
    }
    Danh_sach_Loc = Danh_sach.filter(x =>
        parseInt(x.Thang) == Thang_Loc && parseInt(x.Nam) == Nam_Loc)

    return Danh_sach_Loc
}

//Kiểm tra dữ liệu lúc đầu để xuất cho vay nợ

function Kiem_tra_Xuat_vay_no(Danh_sach) {
    var Danh_sach_Loc = []
    var Nam_Loc = Th_nam.value
    var Thang_Loc = Th_thang.value

    if (Thang_Loc == "0") {
        Thang_Loc = Thang_hien_hanh
    }
    if (Nam_Loc == "0") {
        Nam_Loc = Nam_hien_hanh
    }
    Danh_sach_Loc = Danh_sach.filter(x =>
        parseInt(x.Thoi_han.thang) == Thang_Loc && parseInt(x.Thoi_han.nam) == Nam_Loc)

    return Danh_sach_Loc
}


//Đảo chuỗi
function Dao_chuoi(str) {
    var NewString = ""
    for (i = str.length - 1; i >= 0; i--) {
        NewString += str[i]
    }
    return NewString
}

//Tính tổng

function Tong(Danh_sach_Loc) {
    var Tong = 0
    var Ket_Qua = ""
    Danh_sach_Loc.forEach(Khoan_chi => {
        Tong += Number(Khoan_chi.So_tien)
    })
    var Chuoi_So = Dao_chuoi(Tong.toString())
    for (i = 0; i < Chuoi_So.length; i++) {
        if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15) {
            Ket_Qua += "."
            Ket_Qua += Chuoi_So[i]
        }
        else {
            Ket_Qua += Chuoi_So[i]
        }
    }
    return Dao_chuoi(Ket_Qua)
}

//Chuẩn hoá dạng tiền

function Chuan_hoa_tien(Chuoi_tien) {
    var Ket_Qua = ""
    var Chuoi_So = Dao_chuoi(Chuoi_tien)
    for (i = 0; i < Chuoi_So.length; i++) {
        if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15) {
            Ket_Qua += "."
            Ket_Qua += Chuoi_So[i]
        }
        else {
            Ket_Qua += Chuoi_So[i]
        }
    }
    return Dao_chuoi(Ket_Qua)
}


//Xuất danh sách thu khu trang mới tải lên

function Xuat_Danh_sach(Danh_sach, Th_Cha, Co) {
    var Loai_danh_sach = ""
    if (Co == 1) {
        Loai_danh_sach = "Thu"
    }
    else if (Co == 2) {
        Loai_danh_sach = "Chi"
    }
    var Noi_dung_bang = `
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th class="center">Chọn</th>
                <th>Nội dung ${Loai_danh_sach}</th>
                <th style="text-align: end">Số tiền ${Loai_danh_sach}</th>
                <th class="center">Ngày</th>
                <th class="center">Quý</th>
                <th class="center">Thao Tác</th>
            </tr>
        </thead>

        <tbody id="Th_Body">
        
        </tbody>
    </table>`
    Th_Cha.innerHTML = Noi_dung_bang
    Danh_sach.forEach(Khoan_tien => {
        var Ngay_thang_nam = Khoan_tien.Ngay + " - " + Khoan_tien.Thang + " - " + Khoan_tien.Nam
        var noi_dung_HTML = `
            
                <td class="center">
                    <label class="pos-rel">
                        <input type="checkbox" class="ace" />
                        <span class="lbl"></span>
                    </label>
                </td>
                <td>${Khoan_tien.Noi_dung}</td>
                <td style="text-align: end">${Khoan_tien.So_tien} VND</td>
                <td class="center">${Ngay_thang_nam}</td>
                <td class="center">${Khoan_tien.Quy}</td>
                
                <td class="center">
                    <div class="btn-group">
                        <button class="btn btn-xs btn-info" onclick="Tao_The_hien_Sua(this.id)" id="Th_Sua_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Sua">
                            <i class="ace-icon fa fa-pencil bigger-120" ></i>
                        </button>
                        <button class="btn btn-xs btn-danger" onclick="Tao_The_hien_Xoa(this.id)" id="Th_xoa_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Xoa">
                            <i class="ace-icon fa fa-trash-o bigger-120" ></i>
                        </button>
                    </div>
                </td>
            `
        var Con = document.createElement("tr")
        Con.setAttribute("id", Khoan_tien.Ma_so)
        Th_Body.appendChild(Con)
        Con.innerHTML = noi_dung_HTML

    })
    Th_Tong.innerHTML = `<h5>Tổng Thu: ${Tong(Danh_sach)} VND</h5>`
}

//Xuất danh sách Vay khi trang mới tải lên

function Xuat_Danh_sach_vay_no(Danh_sach, Th_Cha, Co) {
    var Noi_dung = ""
    if (Co == 1) {
        Noi_dung = "Người vay"
    }
    else if (Co == 2) {
        Noi_dung = "Người nợ"
    }
    var Noi_dung_bang = `
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th class="center">Chọn</th>
                <th class="center">${Noi_dung}</th>
                <th style="text-align: end">Số tiền</th>
                <th class="center">Thời hạn</th>
                <th class="center">Thao Tác</th>
            </tr>
        </thead>

        <tbody id="Th_Body">
        
        </tbody>
    </table>`
    Th_Cha.innerHTML = Noi_dung_bang
    Danh_sach.forEach(Khoan_tien => {
        var Thoi_han = Khoan_tien.Thoi_han.ngay + " - " + Khoan_tien.Thoi_han.thang + " - " + Khoan_tien.Thoi_han.nam
        var noi_dung_HTML = `
            
                <td class="center">
                    <label class="pos-rel">
                        <input type="checkbox" class="ace" />
                        <span class="lbl"></span>
                    </label>
                </td>
                <td class="center">${Khoan_tien.Nguoi_vay}</td>
                <td style="text-align: end">${Khoan_tien.So_tien} VND</td>
                <td class="center">${Thoi_han}</td>
                
                <td class="center">
                    <div class=" btn-group">
                        <button class="btn btn-xs btn-info" onclick="Tao_The_hien_Sua(this.id)" id="Th_Sua_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Sua">
                            <i class="ace-icon fa fa-pencil bigger-120" ></i>
                        </button>
                        <button class="btn btn-xs btn-danger" onclick="Tao_The_hien_Xoa(this.id)" id="Th_xoa_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Xoa">
                            <i class="ace-icon fa fa-trash-o bigger-120" ></i>
                        </button>
                    </div>
                </td>
            `
        var Con = document.createElement("tr")
        Con.setAttribute("id", Khoan_tien.Ma_so)
        Th_Body.appendChild(Con)
        Con.innerHTML = noi_dung_HTML

    })
    Th_Tong.innerHTML = `<h5>Tổng Thu: ${Tong(Danh_sach)} VND</h5>`
}

//Xuất danh sách nợ khi trang mới tải lên

function Xuat_Danh_sach_no(Danh_sach, Th_Cha) {
    var Noi_dung_bang = `
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th class="center">Chọn</th>
                <th class="center">Chủ nợ</th>
                <th style="text-align: end">Số tiền</th>
                <th class="center">Thời hạn</th>
                <th class="center">Thao Tác</th>
            </tr>
        </thead>

        <tbody id="Th_Body">
        
        </tbody>
    </table>`
    Th_Cha.innerHTML = Noi_dung_bang
    Danh_sach.forEach(Khoan_tien => {
        var Thoi_han = Khoan_tien.Thoi_han.ngay + " - " + Khoan_tien.Thoi_han.thang + " - " + Khoan_tien.Thoi_han.nam
        var noi_dung_HTML = `
            
                <td class="center">
                    <label class="pos-rel">
                        <input type="checkbox" class="ace" />
                        <span class="lbl"></span>
                    </label>
                </td>
                <td>${Khoan_tien.Chu_no}</td>
                <td style="text-align: end">${Khoan_tien.So_tien}</td>
                <td>${Thoi_han}</td>
                
                <td>
                    <div class=" btn-group">
                        <button class="btn btn-xs btn-info" onclick="Tao_The_hien_Sua(this.id)" id="Th_Sua_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Sua">
                            <i class="ace-icon fa fa-pencil bigger-120" ></i>
                        </button>
                        <button class="btn btn-xs btn-danger" onclick="Tao_The_hien_Xoa(this.id)" id="Th_xoa_${Khoan_tien.Ma_so}" data-toggle="modal"
                        data-target="#modelId_Xoa">
                            <i class="ace-icon fa fa-trash-o bigger-120" ></i>
                        </button>
                    </div>
                </td>
            `
        var Con = document.createElement("tr")
        Con.setAttribute("id", Khoan_tien.Ma_so)
        Th_Body.appendChild(Con)
        Con.innerHTML = noi_dung_HTML

    })
    Th_Tong.innerHTML = `<h5>Tổng Thu: ${Tong(Danh_sach)} VND</h5>`
}

//Tạo thể hiện ảnh đăng nhập
function XL_Anh_dang_nhap(Th_Anh_dai_dien, Ten_anh) {
    var Ten_quan_ly = JSON.parse(sessionStorage.getItem("Nguoi_dung")).Nguoi_quan_ly
    var Mang_Ten = Ten_quan_ly.toString().trim().split(" ")
    var n = Mang_Ten.length
    var Ten = Mang_Ten[n - 1]
    Th_Anh_dai_dien.innerHTML = `
    <img class="nav-user-photo" src="http://localhost:1001/${Ten_anh}.png" alt=" " />
	<span class="user-info">
		<small>Xin chào,</small>${Ten}
	</span>

	<i class="ace-icon fa fa-caret-down"></i>
    `
}
//Tạo thể hiện nhập thu khi thêm khoản thu mới

function Tao_The_hien_Nhap_thu(Th_Chi_tiet) {
    var chuoiHTML = `
    <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Noi_dung">Nội dung thu</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_Noi_dung" placeholder="Nhập nội dung thu">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_So_tien">Số tiền thu</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_So_tien" placeholder="Nhập số tiền thu">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Ngay">Ngày tháng thu</label>
            <div class="col-sm-9">
                <input type="date" class="form-control" id="Th_Ngay">
            </div>
        </div>
    `
    Th_Chi_tiet.innerHTML = chuoiHTML;
}

//Tạo thể hiện nhập chi khi thêm khoản chi mới

function Tao_The_hien_Nhap_chi(Th_Chi_tiet) {
    var chuoiHTML = `
    <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Noi_dung">Nội dung chi</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_Noi_dung" placeholder="Nhập nội dung chi">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_So_tien">Số tiền chi</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_So_tien" placeholder="Nhập số tiền chi">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Ngay">Ngày tháng chi</label>
            <div class="col-sm-9">
                <input type="date" class="form-control" id="Th_Ngay">
            </div>
        </div>
    `
    Th_Chi_tiet.innerHTML = chuoiHTML;
}


//Tạo thể hiện nhập chi khi thêm khoản chi mới

function Tao_The_hien_Nhap_Cho_vay(Th_Chi_tiet) {
    var chuoiHTML = `
    <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Nguoi_vay">Người vay tiền</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_Nguoi_vay" placeholder="Nhập họ tên">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_So_tien">Số tiền cho vay</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_So_tien" placeholder="Nhập số tiền cho vay">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Ngay">Thời hạn</label>
            <div class="col-sm-9">
                <input type="date" class="form-control" id="Th_Ngay">
            </div>
        </div>
    `
    Th_Chi_tiet.innerHTML = chuoiHTML;
}

//Tạo thể hiện nhập nợ

function Tao_The_hien_Nhap_no(Th_Chi_tiet) {
    var chuoiHTML = `
    <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Chu_no">Chủ nợ</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_Chu_no" placeholder="Nhập họ tên">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_So_tien">Số tiền nợ</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="Th_So_tien" placeholder="Nhập số tiền nợ">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-3" for="Th_Ngay">Thời hạn</label>
            <div class="col-sm-9">
                <input type="date" class="form-control" id="Th_Ngay">
            </div>
        </div>
    `
    Th_Chi_tiet.innerHTML = chuoiHTML;
}
//Tạo khung đăng nhập cho màn hình đăng nhập
function Tao_The_hien_Dang_nhap(Th_Cha) {
    var chuoiHTML = `
    <div class="main-container">
		<div class="main-content">
			<div class="row">
				<div class="col-sm-10 col-sm-offset-1">
					<div class="login-container">
						<div class="center">
							<h1>
								<i class="ace-icon fa fa-leaf green"></i>
								<span class="red">Quản Lý</span>
								<span class="white" id="id-text2">Thu Chi</span>
							</h1>
							<h4 class="blue" id="id-company-text">&copy; Đăng Nhập</h4>
						</div>

						<div class="space-6"></div>

						<div class="position-relative">
							<div id="login-box" class="login-box visible widget-box no-border">
								<div class="widget-body">
									<div class="widget-main">
										<h4 class="header blue lighter bigger">
											<i class="ace-icon fa fa-coffee green"></i>
											Điền Thông Tin Đăng Nhập
										</h4>

										<div class="space-6"></div>

										<form>
											<fieldset>
												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="text" class="form-control"
															placeholder="Tên đăng nhập" id="Th_Ten_Dang_nhap"
															value="GD0001" />
														<i class="ace-icon fa fa-user"></i>
													</span>
												</label>

												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="password" class="form-control"
															placeholder="Mật khẩu" id="Th_Mat_khau" value="GD0001" />
														<i class="ace-icon fa fa-lock"></i>
													</span>
												</label>

												<div id="Th_Thong_bao"></div>

												<div class="clearfix">
													<label class="inline">
														<input type="checkbox" class="ace" />
														<span class="lbl"> Lưu đăng nhập</span>
													</label>

													<button type="button"
														class="width-40 pull-right btn btn-sm btn-primary"
														id="Th_Dang_nhap">
														<i class="ace-icon fa fa-key"></i>
														<span class="bigger-110">Đăng Nhập</span>
													</button>
												</div>

												<div class="space-4"></div>
											</fieldset>
										</form>

										<div class="social-or-login center">
											<span class="bigger-110">Đăng nhập bằng</span>
										</div>

										<div class="space-6"></div>

										<div class="social-login center">
											<a class="btn btn-primary">
												<i class="ace-icon fa fa-facebook"></i>
											</a>

											<a class="btn btn-info">
												<i class="ace-icon fa fa-twitter"></i>
											</a>

											<a class="btn btn-danger">
												<i class="ace-icon fa fa-google-plus"></i>
											</a>
										</div>
									</div><!-- /.widget-main -->

									<div class="toolbar clearfix">
										<div>
											<a href="#" data-target="#forgot-box" class="forgot-password-link">
												
												
											</a>
										</div>

										<div>
											<a href="#" data-target="#signup-box" class="user-signup-link">
												Đăng ký mới
												<i class="ace-icon fa fa-arrow-right"></i>
											</a>
										</div>
									</div>
								</div><!-- /.widget-body -->
							</div><!-- /.login-box -->

							<div id="forgot-box" class="forgot-box widget-box no-border">
								<div class="widget-body">
									<div class="widget-main">
										<h4 class="header red lighter bigger">
											<i class="ace-icon fa fa-key"></i>
											Retrieve Password
										</h4>

										<div class="space-6"></div>
										<p>
											Enter your email and to receive instructions
										</p>

										<form>
											<fieldset>
												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="email" class="form-control" placeholder="Email" />
														<i class="ace-icon fa fa-envelope"></i>
													</span>
												</label>

												<div class="clearfix">
													<button type="button"
														class="width-35 pull-right btn btn-sm btn-danger">
														<i class="ace-icon fa fa-lightbulb-o"></i>
														<span class="bigger-110">Send Me!</span>
													</button>
												</div>
											</fieldset>
										</form>
									</div><!-- /.widget-main -->

									<div class="toolbar center">
										<a href="#" data-target="#login-box" class="back-to-login-link">
											Back to login
											<i class="ace-icon fa fa-arrow-right"></i>
										</a>
									</div>
								</div><!-- /.widget-body -->
							</div><!-- /.forgot-box -->

							<div id="signup-box" class="signup-box widget-box no-border">
        <div class="widget-body">
            <div class="widget-main">
                <h4 class="header green lighter bigger">
                    <i class="ace-icon fa fa-users blue"></i>
                    Đăng Ký Người Dùng Mới
                </h4>

                <div class="space-6"></div>
                <p> Vui Lòng Điền Thông Tin: </p>

                <form>
                    <fieldset>

                        <label class="block clearfix">
                            <span class="block input-icon input-icon-right">
                                <input type="text" class="form-control"
                                    placeholder="Tên đăng nhập" id="Th_Ten_moi"/>
                                <i class="ace-icon fa fa-user"></i>
                            </span>
                        </label>

                        <label class="block clearfix">
                            <span class="block input-icon input-icon-right">
                                <input type="text" class="form-control"
                                    placeholder="Họ tên của bạn" id="Th_Quan_ly_moi"/>
                                <i class="ace-icon fa fa-pencil-square-o"></i>
                            </span>
                        </label>

                        <label class="block clearfix">
                            <span class="block input-icon input-icon-right">
                                <input type="password" class="form-control"
                                    placeholder="Mật khẩu" id="Th_Mat_khau_1"/>
                                <i class="ace-icon fa fa-lock"></i>
                            </span>
                        </label>

                        <label class="block clearfix">
                            <span class="block input-icon input-icon-right">
                                <input type="password" class="form-control"
                                    placeholder="Nhập lại mật khẩu" id="Th_Mat_khau_2"/>
                                <i class="ace-icon fa fa-retweet"></i>
                            </span>
                        </label>

                        <div class="clearfix">
                            <button type="reset" class="width-30 pull-left btn btn-sm">
                                <i class="ace-icon fa fa-refresh"></i>
                                <span class="bigger-110">Nhập lại</span>
                            </button>

                            <button type="button" onclick="Dang_ky_moi()"
                                class="width-65 pull-right btn btn-sm btn-success">
                                <span class="bigger-110">Đăng ký</span>

                                <i class="ace-icon fa fa-arrow-right icon-on-right"></i>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div style="color:blue; background-color:white;" class="toolbar center" id="Th_Tb"></div>
            <div class="toolbar center">
                <a href="MH_Dang_nhap.html" data-target="#login-box" class="back-to-login-link" >
                    <i class="ace-icon fa fa-arrow-left"></i>
                    Quay lại trang đăng nhập
                </a>
            </div>
        </div><!-- /.widget-body -->
    </div><!-- /.signup-box -->
						</div><!-- /.position-relative -->
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->
		</div><!-- /.main-content -->
	</div><!-- /.main-container -->
    `
    Th_Cha.innerHTML = chuoiHTML
}

//Ghi Media

function Ghi_Media(Hinh) {
        var Xu_ly_HTTP = new XMLHttpRequest()
        var Dia_chi_Xu_ly = `${Dia_chi_Media}`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
        var Chuoi_Goi = JSON.stringify(Hinh)
        Xu_ly_HTTP.send(Chuoi_Goi)
        var Chuoi_KQ = Xu_ly_HTTP.responseText
        console.log(Chuoi_KQ)
        return Chuoi_KQ
        
}
