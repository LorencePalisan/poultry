
        async function handleForm(e) {
        e.preventDefault();
        const emailInput = document.querySelector('input[type="email"]');
        const submitBtn = e.target.querySelector('button');
        const msg = document.getElementById('response-msg');
        // Document URL
        const DOCUMENT_URL = 'AKfycbxUpgOfRTx0cxHj-ozHWBS23KSJUHdYhxleIsHlENOTrUSIjiOefm-qE33zAqY2S_qFQw';
        // Web App URL from Google Apps Script deployment
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJDz2ewbYu11BVmXAyV_bOaWnrqfBTwVAp8Mq6CiXV40XStVpL3zUtTeCxZFiTEsYI/exec';
        // Visual feedback for the user
        submitBtn.innerText = "Joining...";
        submitBtn.disabled = true;

        try {
            // Send data to Google Sheets
            await fetch(`${SCRIPT_URL}?email=${encodeURIComponent(emailInput.value)}`, {
                method: 'GET',
                mode: 'no-cors', // <--- ADD THIS LINE
            });

            // Success state
            msg.textContent = "🚀 Success! You're on the list.";
            msg.style.color = "#10b981";
            emailInput.value = '';
          
        } catch (error) {
            // Error state
            msg.textContent = "Something went wrong. Please try again.";
            msg.style.color = "#ef4444";
        } finally {
            submitBtn.innerText = "Get Early Access";
            submitBtn.disabled = false;
        }
        
        return false; 
        }