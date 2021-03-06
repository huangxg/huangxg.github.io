var bao = bao || {};

bao.life = bao.life || {};

bao.life.us_crimes_2012 = {
  cols : [
    { title: '都市区',  type: 'string', align: 'left'}, 
    { title: '人口',    type: 'number', decimal: 0, align: 'right'}, 
    { title: '犯罪率',  type: 'number', decimal: 1, align: 'right'}, 
    { title: '安全指数', type: 'number', decimal: 1, align: 'right'}
  ],
  data : [
    ['Abilene, TX', 168729, 297.5, 63.9], 
    ['Akron, OH', 703715, 324.1, 57.3], 
    ['Albany, GA', 159379, 527.7, 17.0], 
    ['Albany-Schenectady-Troy, NY', 874629, 282.6, 68.5], 
    ['Albuquerque, NM', 897005, 662.0, 6.1], 
    ['Alexandria, LA', 155330, 677.9, 5.0], 
    ['Allentown-Bethlehem-Easton, PA-NJ', 823807, 214.2, 85.0], 
    ['Altoona, PA', 127494, 255.7, 74.0], 
    ['Amarillo, TX', 255139, 516.6, 19.0], 
    ['Ames, IA', 90011, 277.7, 69.4], 
    ['Anchorage, AK', 310965, 789.2, 1.7], 
    ['Anderson, IN', 131235, 205.8, 86.1], 
    ['Anderson, SC', 189305, 582.7, 12.1], 
    ['Ann Arbor, MI', 344531, 309.4, 60.3], 
    ['Anniston-Oxford, AL', 119143, 509.5, 20.0], 
    ['Appleton, WI', 226649, 141.6, 96.2], 
    ['Asheville, NC', 430246, 218.0, 83.6], 
    ['Athens-Clarke County, GA', 195076, 376.3, 43.6], 
    ['Atlanta-Sandy Springs-Marietta, GA', 5338234, 400.9, 39.0], 
    ['Atlantic City-Hammonton, NJ', 275463, 506.8, 20.9], 
    ['Auburn-Opelika, AL', 140922, 210.0, 85.3], 
    ['Augusta-Richmond County, GA-SC', 563924, 360.9, 46.6], 
    ['Austin-Round Rock-San Marcos, TX', 1752404, 287.1, 67.7], 
    ['Bakersfield-Delano, CA', 849502, 523.5, 18.7], 
    ['Baltimore-Towson, MD', 2736186, 646.2, 8.3], 
    ['Bangor, ME', 153903, 79.9, 99.5], 
    ['Barnstable Town, MA', 217204, 453.5, 28.5], 
    ['Baton Rouge, LA', 809822, 586.8, 11.6], 
    ['Battle Creek, MI', 136043, 627.0, 9.1], 
    ['Bay City, MI', 107690, 273.9, 69.9], 
    ['Beaumont-Port Arthur, TX', 396925, 545.9, 14.8], 
    ['Bellingham, WA', 204296, 214.9, 84.4], 
    ['Bend, OR', 159412, 331.2, 54.6], 
    ['Billings, MT', 159454, 262.1, 72.9], 
    ['Binghamton, NY', 252857, 216.7, 83.9], 
    ['Birmingham-Hoover, AL', 1133475, 524.2, 17.9], 
    ['Bismarck, ND', 110613, 221.5, 82.5], 
    ['Blacksburg-Christiansburg-Radford, VA', 164905, 148.6, 94.8], 
    ['Bloomington, IN', 193698, 195.1, 87.7], 
    ['Bloomington-Normal, IL', 170082, 321.0, 57.9], 
    ['Boise City-Nampa, ID', 623381, 209.0, 85.8], 
    ['Boston-Cambridge-Quincy, MA-NH', 4578146, 374.7, 44.2], 
    ['Boulder, CO', 299698, 232.6, 79.8], 
    ['Bowling Green, KY', 126823, 163.2, 92.7], 
    ['Bremerton-Silverdale, WA', 255073, 317.6, 58.7], 
    ['Bridgeport-Stamford-Norwalk, CT', 901031, 293.6, 65.0], 
    ['Brownsville-Harlingen, TX', 414768, 293.4, 65.5], 
    ['Brunswick, GA', 113849, 505.1, 21.4], 
    ['Buffalo-Niagara Falls, NY', 1140613, 439.2, 30.2], 
    ['Burlington, NC', 153047, 420.8, 34.0], 
    ['Burlington-South Burlington, VT', 212535, 122.7, 97.3], 
    ['Canton-Massillon, OH', 404718, 299.2, 63.3], 
    ['Cape Coral-Fort Myers, FL', 627187, 352.8, 48.8], 
    ['Cape Girardeau-Jackson, MO-IL', 96620, 463.7, 28.0], 
    ['Carson City, NV', 55740, 265.5, 72.1], 
    ['Casper, WY', 76057, 247.2, 76.8], 
    ['Cedar Rapids, IA', 259291, 184.3, 89.1], 
    ['Champaign-Urbana, IL', 232588, 568.0, 13.2], 
    ['Charleston, WV', 304676, 422.1, 33.7], 
    ['Charleston-North Charleston-Summerville, SC', 682121, 513.8, 19.2], 
    ['Charlotte-Gastonia-Rock Hill, NC-SC', 1780095, 428.1, 32.9], 
    ['Charlottesville, VA', 203966, 165.2, 92.1], 
    ['Chattanooga, TN-GA', 533526, 501.0, 22.2], 
    ['Cheyenne, WY', 92473, 244.4, 77.3], 
    ['Chicago-Joliet-Naperville, IL-IN-WI', 9491301, 859.8, 0.3], 
    ['Chico, CA', 222586, 258.8, 73.5], 
    ['Cincinnati-Middletown, OH-KY-IN', 2134687, 294.5, 64.7], 
    ['Clarksville, TN-KY', 276234, 435.9, 31.0], 
    ['Cleveland, TN', 116833, 627.4, 8.8], 
    ['Cleveland-Elyria-Mentor, OH', 2078757, 404.6, 38.4], 
    ["Coeur d'Alene, ID", 141132, 240.0, 78.7], 
    ['College Station-Bryan, TX', 233472, 358.9, 46.9], 
    ['Colorado Springs, CO', 656862, 372.8, 44.4], 
    ['Columbia, MO', 173414, 420.4, 34.3], 
    ['Columbia, SC', 777116, 716.9, 3.6], 
    ['Columbus, GA-AL', 298305, 409.0, 36.8], 
    ['Columbus, IN', 77186, 163.2, 92.7], 
    ['Columbus, OH', 1837882, 362.6, 46.4], 
    ['Corpus Christi, TX', 437195, 536.6, 15.7], 
    ['Corvallis, OR', 86490, 112.2, 98.4], 
    ['Crestview-Fort Walton Beach-Destin, FL', 183286, 426.7, 33.2], 
    ['Cumberland, MD-WV', 104047, 324.9, 55.9], 
    ['Dallas-Fort Worth-Arlington, TX', 6505848, 358.4, 47.2], 
    ['Dalton, GA', 144100, 223.5, 82.0], 
    ['Danville, IL', 81871, 588.7, 11.3], 
    ['Danville, VA', 107834, 198.5, 87.2], 
    ['Davenport-Moline-Rock Island, IA-IL', 381200, 416.1, 35.9], 
    ['Dayton, OH', 842118, 290.1, 66.6], 
    ['Decatur, AL', 154569, 221.3, 82.8], 
    ['Decatur, IL', 111101, 510.3, 19.8], 
    ['Deltona-Daytona Beach-Ormond Beach, FL', 501334, 500.9, 22.5], 
    ['Denver-Aurora-Broomfield, CO', 2587784, 354.8, 48.5], 
    ['Des Moines-West Des Moines, IA', 572618, 277.7, 69.4], 
    ['Detroit-Warren-Livonia, MI', 4293012, 573.8, 12.9], 
    ['Dothan, AL', 146340, 403.2, 38.7], 
    ['Dover, DE', 163973, 622.1, 9.6], 
    ['Dubuque, IA', 94143, 155.1, 93.7], 
    ['Duluth, MN-WI', 281781, 329.0, 55.1], 
    ['Durham-Chapel Hill, NC', 510752, 441.1, 29.6], 
    ['Eau Claire, WI', 161853, 150.8, 94.6], 
    ['El Centro, CA', 176580, 270.7, 71.0], 
    ['El Paso, TX', 817494, 406.7, 37.0], 
    ['Elizabethtown, KY', 120563, 97.0, 99.2], 
    ['Elkhart-Goshen, IN', 198941, 115.3, 98.1], 
    ['Elmira, NY', 89229, 198.4, 87.4], 
    ['Erie, PA', 281461, 245.9, 77.0], 
    ['Eugene-Springfield, OR', 355459, 281.6, 68.8], 
    ['Evansville, IN-KY', 360616, 252.9, 74.8], 
    ['Fairbanks, AK', 34243, 560.7, 13.7], 
    ['Fargo, ND-MN', 211760, 357.8, 47.7], 
    ['Farmington, NM', 131499, 625.1, 9.4], 
    ['Fayetteville, NC', 371029, 483.8, 25.8], 
    ['Fayetteville-Springdale-Rogers, AR-MO', 474830, 324.2, 57.0], 
    ['Flagstaff, AZ', 136324, 414.5, 36.2], 
    ['Flint, MI', 425469, 841.2, 0.6], 
    ['Florence, SC', 207960, 658.3, 6.9], 
    ['Florence-Muscle Shoals, AL', 147845, 227.9, 80.9], 
    ['Fond du Lac, WI', 102076, 180.3, 90.5], 
    ['Fort Collins-Loveland, CO', 304849, 214.2, 85.0], 
    ['Fort Smith, AR-OK', 301142, 417.4, 35.1], 
    ['Fort Wayne, IN', 418383, 223.5, 82.0], 
    ['Fresno, CA', 941388, 549.4, 14.6], 
    ['Gadsden, AL', 104933, 488.9, 25.3], 
    ['Gainesville, FL', 267877, 598.4, 10.2], 
    ['Gainesville, GA', 182050, 156.0, 93.5], 
    ['Glens Falls, NY', 129502, 159.8, 92.9], 
    ['Goldsboro, NC', 124178, 443.7, 29.4], 
    ['Grand Forks, ND-MN', 99832, 247.5, 76.5], 
    ['Grand Junction, CO', 149279, 301.4, 62.8], 
    ['Grand Rapids-Wyoming, MI', 773576, 345.4, 50.5], 
    ['Great Falls, MT', 82049, 248.6, 75.9], 
    ['Greeley, CO', 257229, 293.1, 65.8], 
    ['Green Bay, WI', 307576, 145.0, 95.7], 
    ['Greensboro-High Point, NC', 730966, 383.8, 42.2], 
    ['Greenville, NC', 192690, 650.0, 7.7], 
    ['Greenville-Mauldin-Easley, SC', 644406, 539.7, 15.4], 
    ['Gulfport-Biloxi, MS', 249760, 225.4, 81.1], 
    ['Hagerstown-Martinsburg, MD-WV', 270693, 264.9, 72.4], 
    ['Hanford-Corcoran, CA', 154780, 350.2, 49.6], 
    ['Harrisburg-Carlisle, PA', 551228, 306.8, 61.1], 
    ['Harrisonburg, VA', 126724, 118.4, 97.6], 
    ['Hartford-West Hartford-East Hartford, CT', 1022173, 293.4, 65.5], 
    ['Hattiesburg, MS', 145428, 140.4, 96.5], 
    ['Hickory-Lenoir-Morganton, NC', 370132, 222.4, 82.2], 
    ['Hinesville-Fort Stewart, GA', 78942, 340.8, 52.4], 
    ['Holland-Grand Haven, MI', 263602, 152.1, 94.3], 
    ['Honolulu, HI', 963607, 268.1, 71.6], 
    ['Hot Springs, AR', 96750, 512.7, 19.5], 
    ['Houma-Bayou Cane-Thibodaux, LA', 210082, 314.6, 59.8], 
    ['Houston-Sugar Land-Baytown, TX', 6071933, 550.8, 14.3], 
    ['Huntington-Ashland, WV-KY-OH', 287599, 792.0, 1.4], 
    ['Huntsville, AL', 419602, 501.9, 22.0], 
    ['Idaho Falls, ID', 131886, 193.3, 88.0], 
    ['Indianapolis-Carmel, IN', 1765211, 586.2, 11.8], 
    ['Iowa City, IA', 153385, 239.9, 79.0], 
    ['Ithaca, NY', 101723, 117.6, 97.9], 
    ['Jackson, MI', 159748, 384.2, 41.7], 
    ['Jackson, MS', 541099, 397.2, 39.8], 
    ['Jackson, TN', 116467, 743.6, 3.1], 
    ['Jacksonville, FL', 1363935, 523.6, 18.1], 
    ['Jacksonville, NC', 180026, 236.6, 79.2], 
    ['Janesville, WI', 161030, 244.1, 77.9], 
    ['Jefferson City, MO', 150351, 314.6, 59.8], 
    ['Johnson City, TN', 200508, 324.2, 57.0], 
    ['Johnstown, PA', 144137, 262.9, 72.7], 
    ['Jonesboro, AR', 121942, 383.0, 42.5], 
    ['Joplin, MO', 176156, 313.4, 60.0], 
    ['Kalamazoo-Portage, MI', 328205, 416.2, 35.7], 
    ['Kankakee-Bradley, IL', 113791, 386.7, 40.6], 
    ['Kansas City, MO-KS', 2045034, 476.8, 26.9], 
    ['Kennewick-Pasco-Richland, WA', 257314, 254.9, 74.3], 
    ['Killeen-Temple-Fort Hood, TX', 413828, 334.0, 53.7], 
    ['Kingsport-Bristol-Bristol, TN-VA', 312618, 363.4, 46.1], 
    ['Kingston, NY', 183313, 182.7, 89.6], 
    ['Knoxville, TN', 704327, 460.0, 28.3], 
    ['Kokomo, IN', 99192, 266.2, 71.8], 
    ['La Crosse, WI-MN', 134312, 320.1, 58.4], 
    ['Lafayette, IN', 202820, 271.2, 70.7], 
    ['Lafayette, LA', 276242, 565.1, 13.5], 
    ['Lake Charles, LA', 200822, 652.1, 7.2], 
    ['Lake Havasu City-Kingman, AZ', 203020, 201.5, 86.9], 
    ['Lakeland-Winter Haven, FL', 610301, 416.7, 35.4], 
    ['Lancaster, PA', 521101, 181.5, 90.2], 
    ['Lansing-East Lansing, MI', 463686, 370.5, 45.3], 
    ['Laredo, TX', 255571, 483.6, 26.1], 
    ['Las Cruces, NM', 211575, 367.7, 45.8], 
    ['Las Vegas-Paradise, NV', 1967721, 647.0, 8.0], 
    ['Lawrence, KS', 111530, 349.7, 49.9], 
    ['Lawton, OK', 125426, 697.6, 4.4], 
    ['Lebanon, PA', 133994, 179.1, 90.7], 
    ['Lewiston, ID-WA', 61476, 168.1, 91.6], 
    ['Lewiston-Auburn, ME', 107688, 154.1, 94.0], 
    ['Lexington-Fayette, KY', 475361, 380.3, 42.8], 
    ['Lima, OH', 106409, 473.6, 27.2], 
    ['Lincoln, NE', 304853, 324.4, 56.5], 
    ['Little Rock-North Little Rock-Conway, AR', 705050, 746.0, 2.8], 
    ['Logan, UT-ID', 127757, 47.7, 100.0], 
    ['Longview, TX', 218879, 385.1, 41.4], 
    ['Longview, WA', 104017, 302.8, 62.0], 
    ['Los Angeles-Long Beach-Santa Ana, CA', 12979653, 405.4, 37.9], 
    ['Louisville/Jefferson County, KY-IN', 1291986, 419.0, 34.8], 
    ['Lubbock, TX', 290884, 675.5, 5.3], 
    ['Lynchburg, VA', 255651, 172.1, 91.3], 
    ['Macon, GA', 235351, 387.5, 40.3], 
    ['Madera-Chowchilla, CA', 152639, 523.5, 18.7], 
    ['Madison, WI', 571071, 218.0, 83.6], 
    ['Manchester-Nashua, NH', 401245, 254.5, 74.6], 
    ['Manhattan, KS', 127888, 288.5, 67.4], 
    ['Mankato-North Mankato, MN', 97487, 220.0, 83.1], 
    ['Mansfield, OH', 124566, 182.2, 89.9], 
    ['McAllen-Edinburg-Mission, TX', 791072, 295.4, 64.4], 
    ['Medford, OR', 205369, 290.2, 66.4], 
    ['Memphis, TN-MS-AR', 1326648, 980.4, 0.0], 
    ['Merced, CA', 258800, 544.4, 15.1], 
    ['Miami-Fort Lauderdale-Pompano Beach, FL', 5640473, 596.7, 10.5], 
    ['Michigan City-La Porte, IN', 112036, 167.8, 91.8], 
    ['Midland, TX', 139752, 285.5, 68.3], 
    ['Milwaukee-Waukesha-West Allis, WI', 1562687, 448.1, 28.8], 
    ['Minneapolis-St. Paul-Bloomington, MN-WI', 3304725, 832.9, 0.9], 
    ['Missoula, MT', 110269, 250.3, 75.4], 
    ['Mobile, AL', 414980, 608.2, 9.9], 
    ['Modesto, CA', 520501, 477.2, 26.4], 
    ['Monroe, LA', 178055, 639.7, 8.5], 
    ['Monroe, MI', 151906, 248.2, 76.2], 
    ['Montgomery, AL', 376339, 297.9, 63.6], 
    ['Morgantown, WV', 132251, 343.0, 51.6], 
    ['Morristown, TN', 137840, 343.9, 51.0], 
    ['Mount Vernon-Anacortes, WA', 118735, 203.8, 86.6], 
    ['Muncie, IN', 118272, 509.0, 20.3], 
    ['Muskegon-Norton Shores, MI', 172058, 433.6, 32.1], 
    ['Myrtle Beach-North Myrtle Beach-Conway, SC', 272427, 668.8, 5.5], 
    ['Napa, CA', 138089, 327.3, 55.4], 
    ['Naples-Marco Island, FL', 325902, 315.4, 59.2], 
    ['Nashville-Davidson--Murfreesboro--Franklin, TN', 1604276, 650.8, 7.4], 
    ['New Haven-Milford, CT', 810372, 371.2, 45.0], 
    ['New Orleans-Metairie-Kenner, LA', 1178445, 490.6, 25.0], 
    ['New York-Northern New Jersey-Long Island, NY-NJ-PA', 18974419, 406.0, 37.3], 
    ['Niles-Benton Harbor, MI', 156941, 302.0, 62.5], 
    ['North Port-Bradenton-Sarasota, FL', 711852, 494.2, 24.7], 
    ['Norwich-New London, CT', 146560, 397.8, 39.5], 
    ['Ocala, FL', 335813, 496.7, 23.6], 
    ['Ocean City, NJ', 97589, 316.6, 59.0], 
    ['Odessa, TX', 140016, 679.2, 4.7], 
    ['Ogden-Clearfield, UT', 557743, 148.3, 95.4], 
    ['Oklahoma City, OK', 1266404, 528.2, 16.8], 
    ['Olympia, WA', 256222, 229.1, 80.6], 
    ['Omaha-Council Bluffs, NE-IA', 872617, 383.8, 42.2], 
    ['Orlando-Kissimmee-Sanford, FL', 2163500, 595.7, 10.7], 
    ['Oshkosh-Neenah, WI', 167722, 191.4, 88.3], 
    ['Owensboro, KY', 115545, 141.9, 95.9], 
    ['Oxnard-Thousand Oaks-Ventura, CA', 832997, 204.7, 86.4], 
    ['Palm Bay-Melbourne-Titusville, FL', 550781, 592.2, 11.0], 
    ['Palm Coast, FL', 97000, 320.6, 58.1], 
    ['Panama City-Lynn Haven-Panama City Beach, FL', 171153, 534.6, 15.9], 
    ['Parkersburg-Marietta-Vienna, WV-OH', 162248, 666.0, 5.8], 
    ['Pascagoula, MS', 162859, 336.5, 53.2], 
    ['Pensacola-Ferry Pass-Brent, FL', 455110, 526.7, 17.3], 
    ['Peoria, IL', 380327, 385.7, 41.1], 
    ['Philadelphia-Camden-Wilmington, PA-NJ-DE-MD', 5988988, 532.3, 16.2], 
    ['Phoenix-Mesa-Glendale, AZ', 4252245, 379.8, 43.1], 
    ['Pine Bluff, AR', 101017, 769.2, 2.2], 
    ['Pittsburgh, PA', 2363799, 299.7, 63.1], 
    ['Pittsfield, MA', 132019, 410.5, 36.5], 
    ['Pocatello, ID', 91658, 209.5, 85.5], 
    ['Port St. Lucie, FL', 429887, 344.5, 50.7], 
    ['Portland-South Portland-Biddeford, ME', 514030, 130.7, 97.0], 
    ['Portland-Vancouver-Hillsboro, OR-WA', 2251909, 259.7, 73.2], 
    ['Poughkeepsie-Newburgh-Middletown, NY', 673314, 241.0, 78.4], 
    ['Providence-Fall River-Warwick, RI-MA', 1301595, 371.4, 44.7], 
    ['Prescott, AZ', 214020, 357.9, 47.4], 
    ['Provo-Orem, UT', 536977, 74.1, 99.8], 
    ['Pueblo, CO', 161834, 532.0, 16.5], 
    ['Punta Gorda, FL', 162158, 244.2, 77.6], 
    ['Racine, WI', 196259, 231.8, 80.3], 
    ['Raleigh-Cary, NC', 1144826, 243.3, 78.1], 
    ['Rapid City, SD', 127919, 405.7, 37.6], 
    ['Reading, PA', 412754, 308.2, 60.6], 
    ['Redding, CA', 179306, 726.1, 3.3], 
    ['Reno-Sparks, NV', 429004, 391.6, 40.0], 
    ['Richmond, VA', 1273282, 234.8, 79.5], 
    ['Riverside-San Bernardino-Ontario, CA', 4274518, 354.9, 48.3], 
    ['Roanoke, VA', 312395, 272.1, 70.5], 
    ['Rochester, MN', 187446, 191.0, 88.5], 
    ['Rochester, NY', 1059061, 289.3, 67.2], 
    ['Rockford, IL', 350483, 706.5, 4.2], 
    ['Rocky Mount, NC', 154324, 499.0, 22.8], 
    ['Rome, GA', 97585, 498.0, 23.3], 
    ['Sacramento--Arden-Arcade--Roseville, CA', 2174392, 420.2, 34.6], 
    ['Saginaw-Saginaw Township North, MI', 200018, 785.9, 2.0], 
    ['Salem, OR', 394898, 224.1, 81.4], 
    ['Salinas, CA', 419936, 464.6, 27.7], 
    ['Salisbury, MD', 126390, 525.4, 17.6], 
    ['Salt Lake City, UT', 1145892, 303.8, 61.4], 
    ['San Angelo, TX', 114176, 251.4, 75.1], 
    ['San Antonio-New Braunfels, TX', 2187591, 398.1, 39.2], 
    ['San Diego-Carlsbad-San Marcos, CA', 3131701, 351.5, 49.1], 
    ['San Francisco-Oakland-Fremont, CA', 4386357, 508.3, 20.6], 
    ['San Jose-Sunnyvale-Santa Clara, CA', 1858506, 256.1, 73.7], 
    ['San Luis Obispo-Paso Robles, CA', 272807, 249.3, 75.7], 
    ['Sandusky, OH', 77135, 290.4, 66.1], 
    ['Santa Barbara-Santa Maria-Goleta, CA', 428878, 386.4, 40.9], 
    ['Santa Cruz-Watsonville, CA', 265467, 440.4, 29.9], 
    ['Santa Fe, NM', 145783, 378.6, 43.3], 
    ['Santa Rosa-Petaluma, CA', 489566, 347.7, 50.2], 
    ['Savannah, GA', 352188, 341.3, 52.1], 
    ['Scranton--Wilkes-Barre, PA', 565428, 269.4, 71.3], 
    ['Seattle-Tacoma-Bellevue, WA', 3493774, 330.2, 54.8], 
    ['Sebastian-Vero Beach, FL', 139909, 321.6, 57.6], 
    ['Sheboygan, WI', 116010, 136.2, 96.8], 
    ['Sherman-Denison, TX', 123421, 272.2, 70.2], 
    ['Shreveport-Bossier City, LA', 403595, 768.0, 2.5], 
    ['Sioux City, IA-NE-SD', 144528, 289.9, 66.9], 
    ['Sioux Falls, SD', 231036, 215.1, 84.2], 
    ['South Bend-Mishawaka, IN-MI', 320549, 350.3, 49.4], 
    ['Spartanburg, SC', 287618, 487.1, 25.5], 
    ['Spokane, WA', 478614, 343.5, 51.3], 
    ['Springfield, IL', 210802, 711.6, 3.9], 
    ['Springfield, MA', 697165, 498.7, 23.1], 
    ['Springfield, MO', 438299, 426.0, 33.5], 
    ['Springfield, OH', 138434, 296.9, 64.2], 
    ['St. Cloud, MN', 190553, 308.0, 60.9], 
    ['St. George, UT', 141666, 108.6, 99.0], 
    ['St. Joseph, MO-KS', 127813, 275.4, 69.6], 
    ['St. Louis, MO-IL', 2824159, 495.4, 24.2], 
    ['State College, PA', 154481, 110.7, 98.7], 
    ['Steubenville-Weirton, OH-WV', 123243, 434.0, 31.8], 
    ['Stockton, CA', 693362, 821.2, 1.1], 
    ['Sumter, SC', 108707, 505.9, 21.1], 
    ['Syracuse, NY', 665555, 286.5, 68.0], 
    ['Tallahassee, FL', 372419, 661.1, 6.4], 
    ['Tampa-St. Petersburg-Clearwater, FL', 2821174, 435.2, 31.3], 
    ['Terre Haute, IN', 173306, 182.9, 89.4], 
    ['Texarkana, TX-Texarkana, AR', 138304, 660.1, 6.6], 
    ['Toledo, OH', 651905, 504.5, 21.7], 
    ['Topeka, KS', 235354, 376.0, 43.9], 
    ['Trenton-Ewing, NJ', 367733, 436.2, 30.7], 
    ['Tucson, AZ', 994140, 433.4, 32.4], 
    ['Tulsa, OK', 947512, 554.1, 14.0], 
    ['Tuscaloosa, AL', 220518, 444.0, 29.1], 
    ['Tyler, TX', 214127, 369.4, 45.5], 
    ['Utica-Rome, NY', 300743, 232.4, 80.0], 
    ['Valdosta, GA', 141426, 342.9, 51.8], 
    ['Vallejo-Fairfield, CA', 418203, 430.9, 32.7], 
    ['Victoria, TX', 117812, 495.7, 23.9], 
    ['Vineland-Millville-Bridgeton, NJ', 157095, 494.6, 24.4], 
    ['Virginia Beach-Norfolk-Newport News, VA-NC', 1691669, 324.4, 56.5], 
    ['Visalia-Porterville, CA', 447377, 434.1, 31.6], 
    ['Waco, TX', 239849, 469.5, 27.4], 
    ['Warner Robins, GA', 141742, 331.6, 54.0], 
    ['Washington-Arlington-Alexandria, DC-VA-MD-WV', 5651690, 334.6, 53.5], 
    ['Waterloo-Cedar Falls, IA', 168698, 331.4, 54.3], 
    ['Wausau, WI', 134647, 148.5, 95.1], 
    ['Wenatchee-East Wenatchee, WA', 112624, 157.2, 93.2], 
    ['Wheeling, WV-OH', 147197, 578.0, 12.4], 
    ['Wichita Falls, TX', 154490, 357.3, 48.0], 
    ['Wichita, KS', 627017, 577.2, 12.7], 
    ['Williamsport, PA', 116481, 177.7, 91.0], 
    ['Wilmington, NC', 366909, 336.9, 52.9], 
    ['Winchester, VA-WV', 129751, 189.6, 88.8], 
    ['Winston-Salem, NC', 483775, 476.9, 26.6], 
    ['Worcester, MA', 803419, 439.1, 30.5], 
    ['Yakima, WA', 247047, 326.7, 55.7], 
    ['York-Hanover, PA', 436359, 303.4, 61.7], 
    ['Youngstown-Warren-Boardman, OH-PA', 562739, 302.1, 62.2], 
    ['Yuba City, CA', 168854, 405.1, 38.1], 
    ['Yuma, AZ', 198522, 340.5, 52.7]
  ]
};
