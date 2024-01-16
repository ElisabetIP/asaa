// ProductDetails.js

import React from 'react';
import '../../CSS/DetailProduk/detail.css';
import { CardContent, Box } from '@mui/material';


function Detailproduk() {
    return (
        <div className="container">
            <div className="product-details">
            <img src="/BataTempelMozaik.png" alt="Produk 1" />
            <CardContent>
                <h2>Bata Tempel Mozaik</h2>
                <Box sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "baseline",
                    flexDirection: "column",
                    mb: 2,
                }}
                >
                    <p>Spesifikasi :</p>
                    <p>• Warna : Putih</p>
                    <p>• Ukuran : 20 . 10 cm</p>
                    <p>
                        <b>• Harga yang tertera untuk 1 pcs</b>
                    </p>
                </Box>
            </CardContent>
            <div className="price">Rp.2.500</div>
            <button>
                <a href="keranjang.html">
                    <img src="/keranjang.png" alt="keranjang-icon" />
                    <h4><b>Tambahkan ke Keranjang</b></h4>
                </a>
            </button>
            </div>
        
        </div >
    );
}

export default Detailproduk;
