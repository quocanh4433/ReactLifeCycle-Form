const stateDefault = {
    mangNguoiDung: [
        {
            taiKhoan: "nguyenvana",
            password: "a123",
            email: "nguyenvana@gmail.com",
            hoTen: "nguyenvana",
            soDienThoai: "01234567",
            loaiNguoiDung: "khach hang",
        },
        {
            taiKhoan: "nguyenvanb",
            password: "b1234",
            email: "nguyenvanb@gmail.com",
            hoTen: "nguyenvanb",
            soDienThoai: "0234552354544",
            loaiNguoiDung: "khach hang",
        }
    ],
    nguoiDungChinhSua: {
        taiKhoan: "",
        password: "",
        email: "",
        hoTen: "",
        soDienThoai: "",
        loaiNguoiDung: "",
    },
}

export const BaiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case "THEM_NGUOI_DUNG": {
            // Cách 1:
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]

            //Cách 2
            // state.mangNguoiDung.push(action.mangNguoiDung) 
            return {...state}
        }
        case "XOA_NGUOI_DUNG": {
            state.mangNguoiDung = [...state.mangNguoiDung.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan)]
            return {...state}
        }
        case "CHINH_SUA_NGUOI_DUNG": {
            state.nguoiDungChinhSua = action.nguoiDungChinhSua 
        }
        case "HANDLE_CHANGE_INPUT": {
            state.nguoiDung = action.nguoiDungChinhSua
            return { ...state }
        }
        
        default: return state
    }
}