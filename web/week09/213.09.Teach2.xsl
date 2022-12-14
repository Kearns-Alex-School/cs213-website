<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="xml" indent="yes"/>

	<xsl:template match="/">
		<playlist>
   		<trackList>
   			<xsl:for-each select="playlist/track">
   				<track>
						<title><xsl:value-of select="title"/></title>
						<location><xsl:value-of select="location"/></location>
					</track>
				</xsl:for-each>
   		</trackList>
   	</playlist>
	</xsl:template>

</xsl:stylesheet>