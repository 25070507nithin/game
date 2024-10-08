import React from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function QRCodePage() {
  const navigate = useNavigate();

  const handleQRCodeScan = () => {
    // Simulate scanning by navigating to the next page
    navigate("/enter-name");
  };

  return (
    <div>
      <h1>Scan QR Code to Join</h1>
      <QRCodeCanvas value={window.location.origin + "/enter-name"} size={200} />
      <p>Or click the button below to simulate scanning:</p>
      <button onClick={handleQRCodeScan}>Simulate QR Code Scan</button>
    </div>
  );
}

export default QRCodePage;
