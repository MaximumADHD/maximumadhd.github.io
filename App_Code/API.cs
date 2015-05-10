using System;
using System.Drawing;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script;
using System.Web.Script.Serialization;
using System.Net;

public class MyGitAPI : WebService
{
    private void WriteToPage(string text)
    {
        Context.Response.Output.Write(text);
        Context.Response.End();
    }

    [WebMethod]
    public void Mirror(string url)
    {
        WebClient http = new WebClient();
        string result = http.DownloadString(url);
        WriteToPage(result);
    }

    [WebMethod]
    public void TestMethod()
    {
        WriteToPage("Hello world!");
    }

}
