<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="xml" indent="yes"/>

	<xsl:template match="/">
		<html> 
		<body>
		  <h2>File Collection</h2>
		  <table border="1">
		    <tr bgcolor="#9acd32">
		      <th style="text-align:left">Name</th>
		      <th style="text-align:left">size</th>
		      <th style="text-align:left">Type</th>
		    </tr>
		    <xsl:for-each select="directory/file">
		    <tr>
		      <td><xsl:value-of select="@name"/></td>
		      <td><xsl:value-of select="@size"/></td>
		      <td><xsl:value-of select="@type"/></td>
		    </tr>
		    </xsl:for-each>
		  </table>
		</body>
		</html>
</xsl:template>
</xsl:stylesheet>