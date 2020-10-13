module.exports = ({ clientUrl, logoUrl, fileSize, fileValidity, downloadUrl, mailFrom }) => `
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0;" />
    <meta name="format-detection" content="telephone=no" />
    <style>
      body {
        margin: 0;
        padding: 0;
        min-width: 100%;
        width: 100% !important;
        height: 100% !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', 'Trebuchet MS',
          'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      }
      body,
      table,
      td,
      div,
      p,
      a {
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 100%;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse !important;
        border-spacing: 0;
      }
      img {
        border: 0;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      #outlook a {
        padding: 0;
      }
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      @media all and (min-width: 560px) {
        .container {
          border-radius: 8px;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          -khtml-border-radius: 8px;
        }
      }
      a {
        color: #1d5ea1;
      }
      a:hover {
        color: #313163;
      }
      .footer a,
      .footer a:hover {
        color: #313163;
      }
    </style>
    <title>ByteShare - Quick and Easy File Share</title>
  </head>

  <body
    topmargin="0"
    rightmargin="0"
    bottommargin="0"
    leftmargin="0"
    marginwidth="0"
    marginheight="0"
    width="100%"
    style="
      border-collapse: collapse;
      border-spacing: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 100%;
      background-color: #ebf8fe;
      color: #ffffff;
    "
    bgcolor="#ebf8fe"
    text="#FFFFFF"
  >
    <table
      width="100%"
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%"
      class="background"
    >
      <tr>
        <td
          align="center"
          valign="top"
          style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0"
          bgcolor="#ebf8fe"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            align="center"
            width="500"
            style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 500px"
            class="wrapper"
          >
            <tr>
              <td
                align="center"
                valign="top"
                style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 0px"
                class="hero"
              >
                <a target="_blank" style="text-decoration: none" href="${clientUrl}"
                  ><img
                    border="0"
                    vspace="0"
                    hspace="0"
                    src="${logoUrl}"
                    alt="Please enable images to view this content"
                    title="Hero Image"
                    width="120"
                    style="
                      width: 100px;
                      color: #313163;
                      font-size: 13px;
                      margin-top: 30px;
                      padding: 0;
                      outline: none;
                      text-decoration: none;
                      -ms-interpolation-mode: bicubic;
                      border: none;
                      display: block;
                    "
                /></a>
              </td>
            </tr>

            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  line-height: 150%;
                  padding-top: 27px;
                  padding-bottom: 0;
                "
                class="supheader"
              >
                <a href="mailto:${mailFrom}" style="color: #313163; text-decoration: underline; font-size: 16px;
                font-weight: bold;"> ${mailFrom} </a>
              </td>
            </tr>

            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  font-size: 24px;
                  font-weight: bold;
                  line-height: 130%;
                  padding-top: 5px;
                  color: #1d5ea1;
                  text-transform: uppercase;
                "
                class="header"
              >
                Shares A File with You
              </td>
            </tr>
            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  font-size: 17px;
                  font-weight: 400;
                  line-height: 160%;
                  padding-top: 15px;
                  color: #313163;
                "
                class="paragraph"
              >
                You've received a file link on <a href="${clientUrl}" rel="nofollow">byteShare.</a>
                Go ahead and download your file from the link below.
                <br />
                <span style="color: #1d5ea1; font-weight: bold">FileSize:</span> ${fileSize} &#10022;
                <span style="color: #1d5ea1; font-weight: bold">Validity:</span> 24 Hrs - <span style="color:#757575; font-size: 14px;">(${fileValidity})</span>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  padding-top: 25px;
                  padding-bottom: 5px;
                "
                class="button"
              >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    align="center"
                    style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0"
                  >
                    <tr>
                      <td
                        align="center"
                        valign="middle"
                        style="
                          padding: 12px 24px;
                          margin: 0;
                          border-collapse: collapse;
                          border-spacing: 0;
                          border-radius: 4px;
                          -webkit-border-radius: 4px;
                          -moz-border-radius: 4px;
                          -khtml-border-radius: 4px;
                        "
                        bgcolor="#1d5ea1"
                      >
                        <a
                          target="_blank"
                          style="
                            text-decoration: none;
                            color: #ffffff;
                            font-size: 17px;
                            font-weight: 400;
                            line-height: 120%;
                          "
                          rel="nofollow"
                          href="${downloadUrl}"
                        >
                          Download File
                        </a>
                      </td>
                    </tr>
                  </table></a
                >
              </td>
            </tr>

            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  padding-top: 30px;
                "
                class="line"
              >
                <hr color="#565F73" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0" />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                valign="top"
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  margin: 0;
                  padding: 0;
                  padding-left: 6.25%;
                  padding-right: 6.25%;
                  width: 87.5%;
                  font-size: 13px;
                  font-weight: 400;
                  line-height: 150%;
                  padding-top: 10px;
                  padding-bottom: 20px;
                  color: #777;
                "
                class="footer"
              >
                Thank you for using
                <a
                  href="${clientUrl}"
                  target="_blank"
                  rel="nofollow"
                  style="
                    text-decoration: underline;
                    color: #313163;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 150%;">
                    byteShare </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>  
  `;
