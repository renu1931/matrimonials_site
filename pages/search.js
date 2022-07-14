import React from "react";
import Link from "next/link";

export default function Search() {
  return (
    <>
      <div className="container pt-5">
        <div>
          <h3 id="search-h3">Begin Your Search for an Ideal Match</h3>
        </div>
        <div className="row">
          <div className="col-md-2">
            <span>I&#39;m looking for a</span>
            <select className="w-100" id="search-select">
              <option>Bride</option>
              <option>Groom</option>
            </select>
            <br />
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-5">
                <span>Age</span>
                <br />
                <select className="w-100" id="search-select">
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                </select>
              </div>
              <div className="col-md-2">
                <span></span>
                <br />
                <p>to</p>
              </div>
              <div className="col-md-5">
                <span></span>
                <br />
                <select className="w-100" id="search-select">
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                  <option>44</option>
                  <option>45</option>
                  <option>46</option>
                  <option>47</option>
                  <option>48</option>
                  <option>49</option>
                  <option>50</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <span>Mother Tongue</span>
            <br />
            <select className="w-100" id="search-select">
              <option>Hindi</option>
              <option>Marwari</option>
              <option>Punjabi</option>
              <option>Gujrati</option>
              <option>Rajasthani</option>
              <option>Benjali</option>
              <option>Haryanvi</option>
              <option>Albanian</option>
              <option>Angika</option>
              <option>Arabic</option>
              <option>Arunachali</option>
              <option>Assamese</option>
              <option>Awadhi</option>
              <option>Badaga</option>
              <option>Bahasa indonesia</option>
              <option>Bengali</option>
              <option>Bhojpuri</option>
              <option>Bhutia</option>
              <option>Chatisgarhi</option>
              <option>Chichewa</option>
              <option>Chinese</option>
              <option>Dogri</option>
              <option>Dutch</option>
              <option>English</option>
              <option>Farsi</option>
              <option>Filipino</option>
              <option>French</option>
              <option>Garhwali</option>
              <option>Garo</option>
              <option>German</option>
              <option>Gujrati</option>
              <option>Haryanvi</option>
              <option>Hausa</option>
              <option>Himachli/Pahari</option>
              <option>Hindi</option>
              <option>Italian</option>
              <option>Javanese</option>
              <option>Kakbarak</option>
              <option>Kanauji</option>
              <option>Kashmiri</option>
              <option>Kannada</option>
              <option>Khandesi</option>
              <option>Khasi</option>
              <option>Khiswahili</option>
              <option>Konkani</option>
              <option>Koshali</option>
              <option>Kumoani</option>
              <option>Kurdish</option>
              <option>Kutchi</option>
              <option>Ladacki</option>
              <option>Lepcha</option>
              <option>Magahi</option>
              <option>Maithili</option>
              <option>Malay</option>
              <option>Malayalam</option>
              <option>Mandarin</option>
              <option>Manipuri</option>
              <option>Marathi</option>
              <option>Marwari</option>
              <option>Miji</option>
              <option>Mizo</option>
              <option>Monpa</option>
              <option>Nepali</option>
              <option>Nicobarese</option>
              <option>Oriya</option>
              <option>Pashtu</option>
              <option>Persian</option>
              <option>Portuguese</option>
              <option>Punjabi</option>
              <option>Rajasthani</option>
              <option>Russian</option>
              <option>Sanskrit</option>
              <option>Santhali</option>
              <option>Serbian</option>
              <option>Sindhi</option>
              <option>Sinhalese</option>
              <option>Sourastra</option>
              <option>Spanish</option>
              <option>Sundanese</option>
              <option>Tamil</option>
              <option>Telugu</option>
              <option>Thai</option>
              <option>Tripuri</option>
              <option>Tulu</option>
              <option>Turkish</option>
              <option>Turkmen</option>
              <option>Urdu</option>
              <option>Vietnamese</option>
            </select>
          </div>
          <div className="col-md-2">
            <span>SubCaste</span>
            <br />
            <select className="w-100" id="search-select">
              <option>Subcaste</option>
              <option>Bisa</option>
              <option>Poddar</option>
            </select>
          </div>
          <div className="col-md-2">
            <span></span>
            <br />
            <Link href="/SeachInfo">
              <button id="search-btn">Search</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
