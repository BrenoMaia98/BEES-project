/* eslint-disable camelcase */ // @TO-DO remove this line
import React from 'react';
import { TrashIcon, IconName, renderIcon } from 'assets/icons';

import { CardContainer, TagDiv } from './styles.BrewerieCard';

const props = {
  id: 299,
  name: 'Almanac Beer Company',
  brewery_type: 'micro',
  street: '651B W Tower Ave',
  address_2: null,
  address_3: null,
  city: 'Alameda',
  state: 'California',
  county_province: null,
  postal_code: '94501-5047',
  country: 'United States',
  longitude: '-122.306283180899',
  latitude: '37.7834497667258',
  phone: '4159326531',
  website_url: 'http://almanacbeer.com',
  updated_at: '2018-08-23T23:24:11.758Z',
  created_at: '2018-08-23T23:24:11.758Z',
};

type TagProps = {
  icon: IconName;
  text: string;
  onClick?: () => void;
};

const Tag = ({ icon, text, onClick }: TagProps) => {
  return (
    <TagDiv onClick={() => (onClick ? onClick() : undefined)}>
      {renderIcon(icon)}
      <span>{text}</span>
    </TagDiv>
  );
};

export default function BrewerieCard() {
  const {
    name,
    street,
    city,
    state,
    country,
    brewery_type,
    postal_code,
    phone,
  } = props;

  const handleClickOnAddMore = () => {
    console.log('clicked');
  };
  const OnRemoveCard = () => {
    console.log('clicked remove');
  };

  return (
    <CardContainer>
      <TrashIcon className="remove-icon" onClick={OnRemoveCard} />
      <h3 className="card-title">{name}</h3>
      <div className="card-info">
        <p>
          {street}
          <br />
          {city},{state} - {country}
        </p>
      </div>

      <div className="tagsList">
        <Tag icon="GraphIcon" text={brewery_type} />
        <Tag icon="LocationMarkerIcon" text={postal_code} />
        <Tag icon="PhoneIcon" text={phone} />
        <Tag
          icon="PlusOutlineIcon"
          text="add more"
          onClick={handleClickOnAddMore}
        />
      </div>
    </CardContainer>
  );
}
